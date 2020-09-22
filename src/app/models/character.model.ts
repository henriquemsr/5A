export class CharacterModel {
  id: String;
  name: String;
  description: String;
  image: String;
  thumbnail: {
    extension: String;
    path: String;
  };
}
