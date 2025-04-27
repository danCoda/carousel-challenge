import { Movie } from "../../types";

type MetadataProgramProps = {
  metadata: Movie;
};

const MetadataProgram = ({ metadata }: MetadataProgramProps) => {
  return (
    <div className="metadata">
      <span>{metadata.rating}</span>
      <span>|</span>
      <span>{metadata.year}</span>
      <span>|</span>
      <span>{metadata.genre}</span>
      <span>|</span>
      <span>{metadata.language}</span>
    </div>
  );
};

export default MetadataProgram;
