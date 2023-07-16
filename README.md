# File Uploader React Component

The FileUploader is a React component designed to facilitate the upload and display of e-bill PDFs. Users can select and upload PDF files, view a preview of the selected file, and manage the uploaded files, including viewing and deleting them.

## Features

Upload PDF Files: Users can select a PDF file from their device using a file input, and the component will validate and allow uploading valid PDF files.

Preview: The component displays a preview of the selected PDF file before uploading. This allows users to ensure they have selected the correct file.

Display Uploaded Files: Once files are uploaded, a list of the uploaded files will be shown with options to view the PDF and delete the uploaded files.

Validation: The component validates the selected files to ensure they are in PDF format before proceeding with the upload process.

## Usage

To run this App in your system follow these steps:

### Clone this project

To clone this project type this below code in the terminal

git clone https://github.com/uttamkamar/pdf-uploader

### Dependencies

The component relies on the following dependencies:

React: ^16.8.0 or higher
react-icons: ^4.2.0 or higher

To add these Dependencies run this followin command in the terminal

npm i

## How It Works

The user selects a PDF file using the file input, and the component validates the file type to ensure it is a PDF.

If a valid PDF file is selected, the user can click the "Upload" button to initiate the upload process.

If the selected PDF file is successfully uploaded, it will be added to the list of uploaded files, and the user will be able to view the PDF preview and delete the uploaded file.

If an invalid or duplicate file is selected, appropriate error messages will be displayed to the user.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Styling

The component relies on the App.css file for styling. You can customize the styling according to your application's design requirements by modifying the styles in that file.

## Note

The component uses a simulated API request to showcase the file upload process. In a real-world scenario, you would replace this simulated API request with actual API calls to save the uploaded files on the server.

## Credits

This FileUploader component was created by uttam and is distributed under the MIT License. Feel free to use, modify, and distribute it as you see fit.

We hope you find this app useful for handling e-bill PDF uploads in your React application! If you have any questions or need further assistance, please don't hesitate to reach out.

Happy coding! 🚀
