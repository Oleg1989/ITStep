import { TypeAnswer } from "./enum/typeAnswer";
import { Question } from "./classElemet/question";

const q1 = new Question('Два плюс два?', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvseosvita.ua%2Flibrary%2Fembed%2F01002krn-8cb9.png.html&psig=AOvVaw1nQnJWn69ambDCJ79WTSlE&ust=1621964300220000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiznIju4vACFQAAAAAdAAAAABAT', TypeAnswer.FreeForm);
const q2 = new Question('Два плюс три?', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvseosvita.ua%2Flibrary%2Fembed%2F01002krn-8cb9.png.html&psig=AOvVaw1nQnJWn69ambDCJ79WTSlE&ust=1621964300220000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiznIju4vACFQAAAAAdAAAAABAT', TypeAnswer.FreeForm);
const q3 = new Question('Два плюс чотири?', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvseosvita.ua%2Flibrary%2Fembed%2F01002krn-8cb9.png.html&psig=AOvVaw1nQnJWn69ambDCJ79WTSlE&ust=1621964300220000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiznIju4vACFQAAAAAdAAAAABAT', TypeAnswer.FreeForm);
const q4 = new Question('Два плюс один?', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvseosvita.ua%2Flibrary%2Fembed%2F01002krn-8cb9.png.html&psig=AOvVaw1nQnJWn69ambDCJ79WTSlE&ust=1621964300220000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiznIju4vACFQAAAAAdAAAAABAT', TypeAnswer.FreeForm);
const q5 = new Question('Два плюс шість?', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvseosvita.ua%2Flibrary%2Fembed%2F01002krn-8cb9.png.html&psig=AOvVaw1nQnJWn69ambDCJ79WTSlE&ust=1621964300220000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiznIju4vACFQAAAAAdAAAAABAT', TypeAnswer.FreeForm);

export const arrQuestions = [q1, q2, q3, q4, q5];