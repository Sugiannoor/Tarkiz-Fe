import { Avatar, Card, CardBody, CardFooter, CardHeader, Tooltip, Typography } from "@material-tailwind/react"

const CardComplain = () => {
    const cardsData = [
        {
          imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
          title: "UI/UX Review Check",
          description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
          avatars: [
            {
              name: "Natali Craig",
              imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
            },
            {
              name: "Tania Andrew",
              imageSrc: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
            },
          ],
          date: "January 10",
        },
        {
            imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            title: "UI/UX Review Check",
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            avatars: [
              {
                name: "Natali Craig",
                imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
              },
              {
                name: "Tania Andrew",
                imageSrc: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
              },
            ],
            date: "January 10",
          },
          {
            imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            title: "UI/UX Review Check",
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            avatars: [
              {
                name: "Natali Craig",
                imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
              },
              {
                name: "Tania Andrew",
                imageSrc: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
              },
            ],
            date: "January 10",
          },
          {
            imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            title: "UI/UX Review Check",
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            avatars: [
              {
                name: "Natali Craig",
                imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
              },
              {
                name: "Tania Andrew",
                imageSrc: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
              },
            ],
            date: "January 10",
          },
          {
            imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
            title: "UI/UX Review Check",
            description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
            avatars: [
              {
                name: "Natali Craig",
                imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
              },
              {
                name: "Tania Andrew",
                imageSrc: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
              },
            ],
            date: "January 10",
          },
      ];
        return (
          <div className="flex justify-center flex-wrap gap-4 mt-4">
             {cardsData.length > 0 ? (
        cardsData.map((card, index) => (
          <Card key={index} className="max-w-[24rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={true}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={card.imageSrc}
                alt={card.title}
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray">
                {card.title}
              </Typography>
              <Typography variant="paragraph" color="gray" className="mt-3 font-normal font-body">
                {card.description}
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center -space-x-3">
                {card.avatars.map((avatar, index) => (
                  <Tooltip key={index} content={avatar.name}>
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt={avatar.name}
                      src={avatar.imageSrc}
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                ))}
              </div>
              <Typography className="font-normal">{card.date}</Typography>
            </CardFooter>
          </Card>
        ))
      ) : (
        <Typography className="text-center">Tidak ada keluhan</Typography>
      )}
          </div>
        );
      };

export default CardComplain
