import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaynig } = useSelector((state) => state.player);

  const {
    data: artistData,
    isFetching: isFetchingAritstDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  if (isFetchingAritstDetails) return <Loader title="Loading Artist Details" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />

      <RelatedSongs
        data={Object.values(artistData?.data[0]?.views["top-songs"]?.data)}
        artistId={artistId}
        isPlaynig={isPlaynig}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
