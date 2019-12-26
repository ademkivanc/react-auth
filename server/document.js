const document = (req, res) => {
    res.json({
        success: true,
        message: 'Documents page'
    });
}

module.exports = document;