const Art = require('../models/Art');

exports.getAllArt = (req, res) => {
    Art.getAll((err, result) => {
        if (err) {
            // Handle error
        } else {
            // Add the full URL to each item in the result
            const dataWithImageUrls = result.map(item => ({
                ...item,
                imageUrl: `http://localhost:3000${item.art_path}`
            }));

            // Send the data with image URLs to the frontend
            res.json(dataWithImageUrls);
        }
    });

}
