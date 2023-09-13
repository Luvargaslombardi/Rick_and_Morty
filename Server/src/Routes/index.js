const login= require("../Controllers/login.js");
const {getCharById}= require("../Controllers/getCharById.js");
const {postFav,deleteFav}= require("../Controllers/handlerFavorites.js");

const router=require("express").Router();

router.get("/character/:id",getCharById);

router.get("/login",login);

router.post("/fav",postFav);

router.delete("/fav/:id",deleteFav);

module.exports=router;