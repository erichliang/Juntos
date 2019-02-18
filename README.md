# Juntos

An ML web app to help reconnect migrant families separated at the border.
Check it out at [https://junto.verafy.me](https://junto.verafy.me).

![Alt Text](https://media.giphy.com/media/9xxcj0C9AL6oByn8G9/giphy.gif)

## Inspiration
In recent news, many immigrant families have been torn apart by the ICE as the government attempts to crack down on illegal immigration. This often results in long term separation or even indefinite separation of the parents and children, since the parents, many of whom are still fighting to stay in the US, have little to no information or time to track down their children at one of many federal detention centers. Juntos' mission is to create an avenue by which these separate families can be reunited. Because it is typically hard for young children to reach out to their families other than being able to recognize them, we have employed methods such as deep learning and computer vision to help create a network of intelligence that will hopefully bring these families together.

## What it does
Juntos, in a broad sense, serves as an image to individual matching system. Users, including both parents and children at detention facilities, will submit a photo of themselves and a photo of the person they are looking for, if they have one. In the case that the individual lacks such a photo, we use a generative adversarial network (GAN) to help reconstruct an image of an individual from only basic descriptions of facial features such as face shape. Juntos then uses a mobile platform to create a common platform for users to identify one another, with features such as location maps of images in the database, as well as generating suggestions of others' profile pictures that closely resemble the target description.

## How we built it
The GAN model behind Juntos comprises of two pretrained models, one of which is the CelebA dataset that has facial biometrics labeled for each image, and the other is the Flickr-Faces-HQ dataset, an extremely diverse set of pictures of faces. Next, we used these models to create a mapping from measurable facial features to the **latent space**, or the input space to the GAN, thus allowing us to recreate faces based off a set of descriptors. In order to make Juntos a more user friendly experience, we experimented multiple types of UI to select the features (buttons and sliders). First of all, we tried out buttons which had one major drawback: selection would not always be precise because some features were interconnected (e.g. increasing the probability of a goatee on the face naturally made the entire face appear more masculine, even when 'female' was selected). In the end, we decided to go with a slider system, which allowed for free form configuration of features without confusing the user.

See more at: [https://devpost.com/software/juntos-yslqri](https://devpost.com/software/juntos-yslqri)
