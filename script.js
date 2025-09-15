const uploadScreen = document.getElementById('upload-screen');
        const uploadedScreen = document.getElementById('uploaded-screen');
        const publishedScreen = document.getElementById('published-screen');
        const successModal = document.getElementById('successModal');
        const modalTitle = document.getElementById('modal-title');
        const modalMessage = document.getElementById('modal-message');
        const closeModalButton = document.getElementById('closeModal');

        const uploadButton = document.querySelector('.upload-box');
        const submitButton = document.querySelector('.submit-button');
        const copyButton = document.querySelector('.copy-button');
        const emailButton = document.querySelector('.email-button');
        const downloadButton = document.querySelector('.download-button');
        const shareLinkInput = document.getElementById('share-link-input');
        const shareEmailInput = document.getElementById('share-email-input');

        document.addEventListener('DOMContentLoaded', () => {
            uploadScreen.classList.remove('hidden');
        });

        const showModal = (title, message) => {
            successModal.classList.remove('hidden');
            modalTitle.textContent = title;
            modalMessage.textContent = message;
            setTimeout(() => {
                successModal.classList.remove('translate-x-full', 'opacity-0');
            }, 10);
        };

        const hideModal = () => {
            successModal.classList.add('translate-x-full', 'opacity-0');
            setTimeout(() => {
                successModal.classList.add('hidden');
            }, 300); // Wait for the transition to finish
        };

        closeModalButton.addEventListener('click', hideModal);

        uploadButton.addEventListener('click', () => {
            uploadScreen.classList.add('hidden');
            uploadedScreen.classList.remove('hidden');
        });

        submitButton.addEventListener('click', () => {
            uploadedScreen.classList.add('hidden');
            publishedScreen.classList.remove('hidden');
            showModal('Submission Successful', 'Your form has been published.');
        });

        copyButton.addEventListener('click', () => {
            shareLinkInput.select();
            shareLinkInput.setSelectionRange(0, 99999);
            document.execCommand('copy');
            showModal('Link Copied', 'The survey link has been copied to your clipboard.');
        });

        emailButton.addEventListener('click', () => {
            if (shareEmailInput.value) {
                showModal('Email Sent', `An email has been sent to ${shareEmailInput.value}.`);
            } else {
                showModal('Error', 'Please enter a valid email address.');
            }
        });

        downloadButton.addEventListener('click', () => {
            console.log('Download responses initiated.');
            showModal('Download Initiated', 'Your download is starting.');
        });

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    console.log('Form data submitted:', data);

    // Show the success modal
    document.getElementById('successModal').classList.remove('hidden');
});

document.getElementById('closeModal').addEventListener('click', function() {
    // Hide the success modal
    document.getElementById('successModal').classList.add('hidden');
});
