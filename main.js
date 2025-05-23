import { ClassicEditor, Essentials, Bold, Italic, Font, Paragraph, Image, ImageInsert, PictureEditing, ImageUploadEditing, ImageUploadProgress, ImageToolbar } from 'ckeditor5';
import { Uploadcare, UploadcareImageEdit } from 'ckeditor5-premium-features';

import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';

// Initialize the keys
const licenseKey = import.meta.env.VITE_CKEDITOR_LICENSE;
const pubkey = import.meta.env.VITE_UPLOADCARE_PUBKEY;

ClassicEditor.create(document.querySelector('#editor'), {
    licenseKey,
    plugins: [Essentials, Bold, Italic, Font, Paragraph, Image, ImageInsert, Uploadcare, PictureEditing, ImageUploadEditing, ImageUploadProgress, UploadcareImageEdit, ImageToolbar],
    toolbar: ['ImageInsert', '|', 'undo', 'redo', '|', 'bold', 'italic', '|', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor'],
    image: {
        toolbar: ['uploadcareImageEdit']
    },
    uploadcare: {
        pubkey,
        uploader: {
            sourceList: [
                'local',
                'dropbox',
                'onedrive'
            ]
        }
    }
});
