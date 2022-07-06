import React from "react";
import { styled } from "@stitches/react";
import { motion } from "framer-motion";
import Box from "./Box";

const data = [
  {
    id: 1,
    name: "Top gun",
    img: "/top-gun.jpeg",
  },
  {
    id: 2,
    name: "Bad guys",
    img: "/bad-guys.jpeg",
  },
  {
    id: 3,
    name: "Jurassic world",
    img: "/jurassic-world.jpeg",
  },
  {
    id: 4,
    name: "Doctor strange",
    img: "/doctor-strange.jpeg",
  },
];

const Card = styled(motion.div, {
  display: "flex",
  maxWidth: 560,
  borderRadius: 10,
  overflow: "clip",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  "&>*": {
    flex: 1,
  },
  "& img": {
    maxWidth: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const MainCard = styled(motion.div, {
  borderRadius: 10,
  overflow: "clip",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  display: "flex",
  flexDirection: "column",
  maxWidth: 480,
  background: "white",
  "& img": {
    width: "100%",
    maxHeight: 480,
    objectFit: "cover",
    objectPosition: "center",
  },
});
const Cards = ({ placeholder=false }: { placeholder?: boolean }) => {
  const [selected, setSelected] = React.useState<undefined | number>(undefined);
  const dummyText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, dolorum! Mollitia enim qui in adipisci reprehenderit aspernatur dolorem. Fuga, iste.";
  return (
    <>
      <Box
        css={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}
      >
        {data.map((item, i) => {
          if (selected === item.id) {
            return (
              <>
                {placeholder && (
                  <Card
                    css={{ opacity: 0 }}
                    onClick={() => setSelected(item.id)}
                  >
                    <Box>
                      <motion.img src={item.img} alt="top gun" />
                    </Box>
                    <Box css={{ padding: 10 }}>
                      <h1>{item.name}</h1>
                      <p>{dummyText}</p>
                    </Box>
                  </Card>
                )}
              </>
            );
          }
          return (
            <Card
              key={item.id}
              layoutId={`${item.id}`}
              onClick={() => setSelected(item.id)}
            >
              <Box>
                <motion.img src={item.img} alt="top gun" />
              </Box>
              <Box css={{ padding: 10 }}>
                <h1>{item.name}</h1>
                <p>{dummyText}</p>
              </Box>
            </Card>
          );
        })}
      </Box>
      {selected && (
        <Box
          css={{
            display: "grid",
            placeItems: "center",
            position: "absolute",
            inset: 0,
          }}
        >
          <MainCard layoutId={`${selected}`}>
            <Box>
              <img src={data[(selected || 0) - 1].img} alt="top gun" />
            </Box>
            <Box css={{ padding: 10 }}>
              <h1>{data[(selected || 0) - 1].name}</h1>
              <p>{dummyText}</p>
              <button onClick={() => setSelected(undefined)}>close</button>
            </Box>
          </MainCard>
        </Box>
      )}
    </>
  );
};

export default Cards;
