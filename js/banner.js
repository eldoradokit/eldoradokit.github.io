document.addEventListener('DOMContentLoaded', () => {
    const bannerSection = document.querySelector('.banner');
    const banners = Array.from(bannerSection.querySelectorAll('.box'));

    // Define the new order here by the index of the banners
    const newOrder = [6, 0, 1, 7, 8, 3, 4, 2, 5,]; // Adjust this array to your desired order

    // Remove all banner elements
    banners.forEach(banner => bannerSection.removeChild(banner));

    // Append banners in the new order
    newOrder.forEach(index => bannerSection.appendChild(banners[index]));
});
