// import {
//   FaLinux,
//   FaWindows,
//   FaXbox,
//   FaPlaystation,
//   FaAndroid,
//   FaApple,
// } from "react-icons/fa";

// import { MdPhoneIphone } from "react-icons/md";

// import { SiNintendo } from "react-icons/si";
// import { BsGlobe } from "react-icons/bs";
// import { Game } from "../hooks/useGames";
// import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
// import PlatformIconList from "./PlatformIconList";
// import CriticScore from "./CriticScore";
// import placeHolderImage from "../assets/no-image-placeholder-6f3882e0.webp";

// export interface Props {
//   id: number;
//   game: Game;


// }


// const GameCard = ({ game }: Props) => {
//   const defaultImage = placeHolderImage; // Specify the path to your default image

//   return (
//     <Card >
//       {/* <Image src={game.background_image} /> */}
//       {game.background_image ? (
//         <Image src={game.background_image} />
//       ) : (
//         <Image src={defaultImage} />
//       )}
//       <CardBody>
//         <HStack justifyContent="space-between" marginBottom={3}>
//           <PlatformIconList
//             platforms={game.parent_platforms.map((p) => p.platform)}
//           />
//           <CriticScore score={game.metacritic} />
//         </HStack>
//         <Heading fontSize='medium'>{game.name}</Heading>

//       </CardBody>
//     </Card>
//   );
// };

// export default GameCard;


import React from "react";
import { FaLinux, FaWindows, FaXbox, FaPlaystation, FaAndroid, FaApple } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import placeHolderImage from "../assets/no-image-placeholder-6f3882e0.webp";

interface Props {
  id: number;
  game: Game;
}

const GameCard: React.FC<Props> = ({ id, game }) => {
  const defaultImage = placeHolderImage; // Specify the path to your default image

  return (
    <Card>
      {game.background_image ? (
        <Image src={game.background_image} />
      ) : (
        <Image src={defaultImage} />
      )}
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='medium'>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
