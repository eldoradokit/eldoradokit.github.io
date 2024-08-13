document.addEventListener('DOMContentLoaded', () => {
    const bannerSection = document.querySelector('.banner');
    const banners = Array.from(bannerSection.querySelectorAll('.box'));

    // Define the new order here by the index of the banners
    const newOrder = [4, 0, 6, 1, 5, 4, 2, 3,]; // Adjust this array to your desired order

    // Remove all banner elements
    banners.forEach(banner => bannerSection.removeChild(banner));

    // Append banners in the new order
    newOrder.forEach(index => bannerSection.appendChild(banners[index]));
});
