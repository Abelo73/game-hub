
import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform, Game } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

export interface Props {
  gameQuery: GameQuery;
}

const GameGrid: React.FC<Props> = ({ gameQuery }) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data && data.flat().map((game: Game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} id={game.id} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;