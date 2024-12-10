// src/components/Stickers.jsx
import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { useUser } from "@clerk/clerk-react";
const Stickers = () => {
const { user } = useUser();
const [stickers, setStickers] = useState([]);
useEffect(() => {
fetchStickers();
}, []);
const fetchStickers = async () => {
const { data } = await supabase
.from("stickers")
.select("*")
.eq("user_id", user.id);
if (data) setStickers(data);
};
return (
<div className="p-4 bg-yellow-100 rounded shadow-md mt-8">
<h3 className="font-bold text-lg mb-2">Your Stickers</h3>
<ul>
{stickers.map((sticker, index) => (
<li key={index} className="mb-1">
{sticker.name}
</li>
))}
</ul>
</div>
);
};
export default Stickers;