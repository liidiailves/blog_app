import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UpdatePost() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { currentUser } = useSelector((state) => state.user);

  const [files, setFiles] = useState([]);
  const [imageUploadProgress, setImageUploadProgress] = useState({});
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({ images: [] });
  const [publishError, setPublishError] = useState(null);

  useEffect(() => {
    try {
      const fetchPost = async () => {
        const res = await fetch(`/api/post/getposts?postId=${postId}`);
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          setPublishError(null);
          setFormData(data.posts[0]);
        }
      };
      fetchPost();
    } catch (error) {
      console.log(error.message);
    }
  }, [postId]);

  const handleUploadImages = async () => {
    try {
      if (files.length === 0) {
        setImageUploadError("Please select at least one image");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const uploadPromises = files.map((file, index) => {
        const fileName = new Date().getTime() + "-" + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        return new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setImageUploadProgress((prevProgress) => ({
                ...prevProgress,
                [index]: progress.toFixed(0),
              }));
            },
            (error) => {
              setImageUploadError("Image upload failed");
              setImageUploadProgress((prevProgress) => ({
                ...prevProgress,
                [index]: null,
              }));
              reject(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setImageUploadError(null);
                setImageUploadProgress((prevProgress) => ({
                  ...prevProgress,
                  [index]: null,
                }));
                resolve(downloadURL);
              });
            }
          );
        });
      });

      const downloadURLs = await Promise.all(uploadPromises);
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, ...downloadURLs],
      }));
    } catch (error) {
      setImageUploadError("Image upload failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `/api/post/updatepost/${formData._id}/${currentUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-6 font-semibold">
        Muuda postitust
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Pealkiri"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            value={formData.category}
          >
            <option value="all">Vali kategooria</option>
            <option value="book">Books</option>
            <option value="dev">Develop</option>
            <option value="dream">Dreams</option>
            <option value="hike">Hikes</option>
            <option value="love">Lexberry&apos;s Snow Star Love</option>
            <option value="mood">Mood</option>
            <option value="music">Music</option>
            <option value="quote">Quotes</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFiles(Array.from(e.target.files))}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={handleUploadImages}
            disabled={
              files.length === 0 ||
              Object.values(imageUploadProgress).some(
                (progress) => progress !== null
              )
            }
          >
            {Object.values(imageUploadProgress).some(
              (progress) => progress !== null
            ) ? (
              <div className="w-16 h-16">
                {Object.values(imageUploadProgress).map((progress, index) =>
                  progress !== null ? (
                    <CircularProgressbar
                      key={index}
                      value={progress}
                      text={`${progress}%`}
                    />
                  ) : null
                )}
              </div>
            ) : (
              "Lae pilt"
            )}
          </Button>
        </div>
        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
        {formData.images &&
          formData.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`upload-${index}`}
              className="w-full max-h-[400px] object-contain"
            />
          ))}
        <ReactQuill
          value={formData.content}
          theme="snow"
          placeholder="Kirjuta midagi..."
          className="h-72 mb-10"
          onChange={(value) => setFormData({ ...formData, content: value })}
        />
        <Button type="submit" gradientDuoTone="purpleToBlue">
          Uuenda postitust
        </Button>
        {publishError && (
          <Alert className="mt-4" color="failure">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
