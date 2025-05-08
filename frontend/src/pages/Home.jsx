import React from 'react';

const posts = [
  {
    id: "1",
    username: "alex_creator",
    title: "Beach Day Vibes",
    caption: "Caught the sunset just in time 🌅",
    location: "London, UK",
    people: "Alex, Tola",
    mediafile: "https://images.pexels.com/photos/29996004/pexels-photo-29996004/free-photo-of-beach-swing-at-twilight-against-sunset.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
  },
  {
    id: "2",
    username: "sade_snap",
    title: "Foodie Moment",
    caption: "Spicy jollof hits different 😋🔥",
    location: "Ikeja City Mall, Lagos",
    people: "Sade",
    mediafile: "https://images.pexels.com/photos/17952745/pexels-photo-17952745/free-photo-of-meal-with-rice-and-fried-cubes-of-aubergine.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: "3",
    username: "tee_pics",
    title: "Street Chronicles",
    caption: "A walk through Marina's old soul 📸",
    location: "CMS, Lagos Island",
    people: "Tunde",
    mediafile: "https://images.pexels.com/photos/858076/pexels-photo-858076.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    id: "4",
    username: "nana_views",
    title: "Nature Flow",
    caption: "River calm, mind clearer.",
    location: "West Europe",
    people: "Nana, Kemi",
    mediafile: "https://images.pexels.com/photos/1108093/pexels-photo-1108093.jpeg"
  },
  {
    id: "5",
    username: "jaylens",
    title: "Campus Glow",
    caption: "Final year drip 💧🎓",
    location: "Unilag Campus",
    people: "Jay, friends",
    mediafile: "https://images.pexels.com/photos/2676888/pexels-photo-2676888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Home = () => {
  return (
    <div className="container mx-auto px-4 mt-8 lg:max-w-1/2 py-20">
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <img
                src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-lg">{post.username}</p>
                <p className="text-gray-500 text-sm">{post.location}</p>
              </div>
            </div>
            <div className="mt-4">
              <img src={post.mediafile} alt={post.title} className="w-full rounded-lg aspect-square object-cover" />
            </div>
            <div className="mt-4">
              <p className="font-semibold text-xl">{post.title}</p>
              <p className="text-gray-700 text-base mt-2">{post.caption}</p>
            </div>
            <div className="mt-2">
              <span className="text-gray-600 text-sm">People: {post.people}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;





// import { useEffect, useState } from "react";
// import api from "../api";

// const Home = () => {
//   const [mediaItems, setMediaItems] = useState([]);

//   useEffect(() => {
//     const fetchMedia = async () => {
//       try {
//         const { data } = await api.get("/posts/media", {
//           withCredentials: true,
//         });
//         setMediaItems(data);
//       } catch (err) {
//         console.error("Failed to load media:", err);
//       }
//     };
//     fetchMedia();
//   }, []);

//   return (
//     <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
//       {mediaItems.length === 0 ? (
//         <p>No media uploaded yet.</p>
//       ) : (
//         mediaItems.map((item) => (
//           <div key={item.id} className="bg-white rounded shadow p-4">
//             <img
//               src={item.url}
//               alt={item.title || "Media"}
//               className="w-full h-60 object-cover mb-2"
//             />
//             <h3 className="text-lg font-bold">{item.title || "Untitled"}</h3>
//             <p className="text-gray-600 text-sm">
//               {item.description || "No description"}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Home;
