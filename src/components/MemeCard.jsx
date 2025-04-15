import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import "../styles/memeCard.css";

const MemeCard = ({ data }) => {
  return (
    <Card key={data.id} className="card">
      <CardBody className="card-body">
        <Image
          alt={data.name}
          className="card-image"
          radius="lg"
          shadow="sm"
          src={data.image}
          width="100%"
        />
      </CardBody>
      <CardFooter className="card-footer">
        <b className="card-title">{data.name}</b>
        <p className="card-likes">Likes: {data.likes}</p>
        <a href={data.image} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </CardFooter>
    </Card>
  );
};

export default MemeCard;
