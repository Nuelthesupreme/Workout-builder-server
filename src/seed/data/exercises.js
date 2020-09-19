const exercises = [
  {
    name: 'Flat Bench Press',
    description: 'This is an exercise for working on the overall chest in a flat bench position.',
    imageUrl: 'https://www.burnthefatinnercircle.com/members/images/1691.jpg',
    externalLink: 'https://www.bodybuilding.com/content/how-to-bench-press-layne-norton-complete-guide.html',
    equipments: [
      "Barbell", "Bench"
    ]
  },
  {
    name: 'Incline bench press',
    description: 'This is an exercise for working on the top part of the chest with the bench in an incline position.',
    imageUrl: 'https://www.burnthefatinnercircle.com/members/images/1669.jpg',
    externalLink: 'https://www.bodybuilding.com/content/exercise-of-the-week-incline-barbell-bench-press.html',
    equipments: [
      "Barbell", "Bench"
    ]
  },
  {
    name: 'Decline bench press',
    description: 'This is an exercise for working on the buttom part of the chest with the bench in a decline position',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492945457901-Z6JGIW7OSYVY7OSUMCOO/ke17ZwdGBToddI8pDm48kIQdKspKbuea70QwULU3UqpZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFM58_o4dpABNtuEkDaAQTZ-Y5xbWdURVX2RU1qTyNEET1mPoWDJTAPY6sdAZ0cJ30/Decline+Barbell+Chest+Press',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Barbell", "Bench"
    ]
  },
  {
    name: 'Bent-over dumbell rows',
    description: 'This is an exercise for woking on the top part of the back by getting in a bent-over position and pulling the dumbell towards the chest.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1075/8446/files/exercise-35.jpg?0',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Dumbell"
    ]
  },
  {
    name: 'Over-hand barbell rows',
    description: 'This is an exercise for working on the top part of the back by grabbing the bar, getting in a bent over position and pulling the bar towards the chest.',
    imageUrl: 'https://cdn2.omidoo.com/sites/default/files/imagecache/full_width/images/bydate/201708/bentoverbarbellrow.jpg',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Barbell"
    ]
  },
  {
    name: 'T-bar rows',
    description: 'This is an exercise for working on the lower and middle part of the back by grabbing the bar from one end, getting in a sitting position and pulling the bar towards you..',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492946024443-ZRF6GX28ZCZZJD0YPUTJ/ke17ZwdGBToddI8pDm48kFI9vScT3c_tIdfInT2-t7FZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHgIUgVziUXOjCkSAy0UWrTLeqAtxl0WhR4FPAUSk5cVURrWgx6uPrVNVNdzldvADg/T-Bar+Rows',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Barbell"
    ]
  },
  {
    name: 'Squats',
    description: 'This is an exercise for working on the quads on the legs by repeating a sitting movement with the back straight and making sure the hips go below the knees for each movement.',
    imageUrl: 'https://www.burnthefatinnercircle.com/members/images/1131.jpg',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Barbell", "squat rack"
    ]
  },
  {
    name: 'Barbell launges',
    description: 'The barbell lunge is a single-leg strength exercise that works the quads, glutes, and hamstrings and its taking steps forward and squating for each step on one leg',
    imageUrl: 'https://st2.depositphotos.com/8546304/11406/i/950/depositphotos_114061440-stock-photo-lunges-with-a-barbell-on.jpg',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Barbell"
    ]
  },
  {
    name: 'Calf raises',
    description: 'This is an exercise for the claves and is done continously tip toeing and flexing the calves each time.',
    imageUrl: 'https://www.burnthefatinnercircle.com/members/images/1747.jpg',
    externalLink: 'https://www.google.com/',
    equipments: [
      "calves-raises-machine", "leg-press-machine"
    ]
  },
  {
    name: 'Barbell curls',
    description: 'This is a an exercise for the bicep and is done by grabbing a barbell and curling your arms to 90 degrees continously without bending the back.',
    imageUrl: 'https://www.burnthefatinnercircle.com/members/images/1869.jpg',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Barbell"
    ]
  },
  {
    name: 'Dumbell curls',
    description: 'This is a an exercise for the bicep and is done by grabbing a dumbell on each arm and curling your arms to 90 degrees continously without bending the back.',
    imageUrl: 'https://www.burnthefatinnercircle.com/members/images/1683b.jpg?cb=20191017074720',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Barbell"
    ]
  },
  {
    name: 'Hammer curls',
    description: 'This is a an exercise for the bicep and is done by grabbing a barbell and curling your arms  to 90 degrees continously without bending the back and you knockles are facking sideways.',
    imageUrl: 'https://www.burnthefatinnercircle.com/members/images/1510b.jpg?cb=20191205203859',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Dumbells"
    ]
  },
  {
    name: 'Tricep dips',
    description: 'This is and exercise for the tricep and can be done on a bench by sliding your legs in fornt of you, hand on the bench behind you and Slowly bend your elbows to lower your body toward the floor until your elbows are at about a 90-degree angle.',
    imageUrl: 'https://www.burnthefatinnercircle.com/members/images/1084.jpg',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Tricep-dips machine", "Bench"
    ]
  },
  {
    name: 'Tricep push-downs',
    description: 'This is a exercise for the tricep and is done using the a-bar and pushing downward against resistance from 90 degrees till arms are straigh and repeat movement.',
    imageUrl: 'https://global-uploads.webflow.com/5d1d0d3f53ced35a29dbe169/5de7af82dd80e669098c020a_tricep-pushdown-anabolic-aliens.jpg',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Tricep-pushdown-machine"
    ]
  },
  {
    name: 'Tricep kickbacks',
    description: 'This is a tricep exercise and is done by getting in a 90 degree position with your arm in the same position and kicking it backwards to straighting it against the resistance of the weight.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1075/8446/files/exercise-47.jpg?0',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Dumbells"
    ]
  },
  {
    name: 'Dumbell shoulder press',
    description: 'This is an exercise for the shoulders and is done on a bench with a striaght back-rest and pushing the dumbell upwards away from the shoulders.',
    imageUrl: 'https://www.gymguider.com/wp-content/uploads/2018/03/Exercise-1-Dumbbell-Shoulder-Press.jpg',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Dumbells", "Bench"
    ]
  },
  {
    name: 'Arnold press',
    description: 'This is an exercise for the shoulders and is done on a bench with a striaght back-rest and pushing the dumbell upwards away from the shoulders and on the way twist the dumbell to the front of you.',
    imageUrl: 'https://wl-brightside.cf.tsp.li/resize/728x/jpg/74d/ebb/9908cd54948768d96ca3d1f012.jpg',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Dumbells", "Bench"
    ]
  },
  {
    name: 'Side raises',
    description: 'This is a shoulder exercise that targets more of the side delts and is done by standing straight and use your side delts to raise the weights upwards.',
    imageUrl: 'https://lh3.googleusercontent.com/proxy/cwZBcisT2xS3OL0tn4ibTpehukyOw8pR9PP5Uw8DJBmQlepiIezyE0wMyaGiTrvTdHfvE4AMqK2yx2NGVyKpkJtBOsf4xLorLB7M61o_F0m5CRMOYK19VYnajAm6D52JttoYx_IHbzicYv_w6uxq2chwmeS_w3SYEFZFdA',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Dumbells"
    ]
  },
  {
    name: 'Sit-ups',
    description: 'This is an exercise for the abs muslce and is done by lying on your back and lifting your tors to squeeze your abs.',
    imageUrl: 'https://www.burnthefatinnercircle.com/members/images/168.jpg',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Body-weight"
    ]
  },
  {
    name: 'Bicycle crunch',
    description: 'This is an exercise for the abs muscle and is done by laying flat on the floor, put your hand behind your head then  then bring your knees in towards your chest in a cycling movement.',
    imageUrl: 'https://www.burnthefatinnercircle.com/members/images/1081.jpg',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Body-weight"
    ]
  },
  {
    name: 'Elbow plank',
    description: 'This is an exercise for the abs muscle and is done by Start face down on the floor resting on your forearms and knees. Push off the floor, raising up off your knees onto your toes and resting mainly on your elbows.',
    imageUrl: 'https://st2.depositphotos.com/8546304/11313/i/950/depositphotos_113135506-stock-photo-elbow-plank-exercise-fitness.jpg',
    externalLink: 'https://www.google.com/',
    equipments: [
      "Body-weight"
    ]
  },
];

export default exercises;