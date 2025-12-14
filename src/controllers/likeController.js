exports.likeProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const userId = req.user.id; 
  
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      const existingLike = await LikeModel.findOne({
        product: productId,
        user: userId,
      });
  
      if (existingLike) {
        await LikeModel.findByIdAndDelete(existingLike._id);
  
        const likesCount = await LikeModel.countDocuments({ product: productId });
  
        return res.status(200).json({
          message: "Product unliked",
          likes: likesCount,
          liked: false,
        });
      }
  
      await LikeModel.create({
        product: productId,
        user: userId,
      });
  
      const likesCount = await LikeModel.countDocuments({ product: productId });
  
      res.status(201).json({
        message: "Product liked",
        likes: likesCount,
        liked: true,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  