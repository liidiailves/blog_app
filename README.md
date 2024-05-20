# Laiskliidu's Blog App

## How to Run

### Development Environment

1. **Clone the repository**:

   ```sh
   git clone https://github.com/liidiailves/blog_app.git
   cd blog_app
   ```

2. **Install dependencies**:

   ```sh
   npm install
   cd client
   npm install
   cd ..
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   # .env file in the root directory

   MONGO=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   ```

   - **MONGO**: MongoDB connection string. If you are using MongoDB Atlas, you can get this from the MongoDB Atlas website.
   - **JWT_SECRET**: Secret key used for signing JWT (JSON Web Token). You can create this yourself.
   - **VITE_FIREBASE_API_KEY**: Key needed for Firebase configuration. You can get this from your Firebase project settings.

4. **Run the server**:

   ```sh
   npm run dev
   ```

5. **Run the client**:
   Open a new terminal window and run the following commands:

   ```sh
   cd client
   npm run dev
   ```

6. **Open in browser**:
   - Server runs at `http://localhost:3000`
   - Client application runs at `http://localhost:5173`

### Production Environment

1. **Clone the repository**:

   ```sh
   git clone https://github.com/liidiailves/blog_app.git
   cd blog_app
   ```

2. **Install dependencies**:

   ```sh
   npm install
   cd client
   npm install
   cd ..
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   # .env file in the root directory

   MONGO=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   ```

   - **MONGO**: MongoDB connection string. If you are using MongoDB Atlas, you can get this from the MongoDB Atlas website.
   - **JWT_SECRET**: Secret key used for signing JWT (JSON Web Token). You can create this yourself.
   - **VITE_FIREBASE_API_KEY**: Key needed for Firebase configuration. You can get this from your Firebase project settings.

4. **Build the client application**:

   ```sh
   npm run build
   ```

5. **Run the server**:

   ```sh
   npm start
   ```

6. **Open in browser**:
   - To access the application, open `http://localhost:3000` in your browser.

## View the Blog Online

You can also view the blog online at [https://laiskliidu-blog.onrender.com/](https://laiskliidu-blog.onrender.com/)
