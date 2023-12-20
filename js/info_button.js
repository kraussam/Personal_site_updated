document.querySelectorAll('img[src="media/icons/info.png"]').forEach(function(img) {
    img.addEventListener('mouseover', function() {
        this.src = 'media/icons/info2.png'; // Replace with the path to your new image
    });

    img.addEventListener('mouseout', function() {
        this.src = 'media/icons/info.png'; // Replace with the path to the original image
    });
});
