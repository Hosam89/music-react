import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { useGetSongbyCountryQuery } from "../redux/services/shazamCore";

const AroundYou = () => {
  const [counrty, setCounrty] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongbyCountryQuery(counrty);

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_t5Xo4FAjEX9QUm3g1EsN9RFN4B8Hv`
      )
      .then((response) => setCounrty(response?.data?.location?.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [counrty]);
  console.log(counrty);
  if (isFetching && loading) return <Loader title="Loading Songs Around You" />;
  if (error && counrty) return <Error />;
  return (
    <div className="flex flex-col ">
      <h2 className="text-bold text-3xl text-white text-left mt-4 mb-10">
        Around you <span className="font-black ">{counrty}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8 ">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default AroundYou;
