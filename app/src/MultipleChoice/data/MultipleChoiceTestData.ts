// import Content from '../../Lessons/Content';
import 一 from '../../test-support/audio/characters/一.mp3.audio?raw';
import 二 from '../../test-support/audio/characters/二.mp3.audio?raw';
import 三 from '../../test-support/audio/characters/三.mp3.audio?raw';
import 四 from '../../test-support/audio/characters/四.mp3.audio?raw';
import pic from '../../test-support/pics/两.jpg';
import { MultipleChoiceExercise } from '../MultipleChoiceTypes';

export default function MultipleChoiceTestData(): MultipleChoiceExercise {
  return {
    itemUnderTestAudio: new Audio(`data:audio/mpeg;base64,${二}`),
    itemUnderTestAudioPlaying: false,
    // iconToMatch: [
    //   Content.getIcon('mdiNumeric1'),
    //   Content.getIcon('mdiPlus'),
    //   Content.getIcon('mdiNumeric5'),
    //   Content.getIcon('mdiMinus'),
    //   Content.getIcon('mdiNumeric4'),
    // ],
    pictureToMatch: pic,
    options: [
      {
        word: '3',
        // word: 'jeg og du og vi to seilte i en tresko',
        audio: new Audio(`data:audio/mpeg;base64,${三}`),
        correct: false,
        disabled: false,
        playing: false,
        buzzing: false,
      },
      {
        word: '2',
        // word: '我',
        audio: new Audio(`data:audio/mpeg;base64,${二}`),
        correct: true,
        disabled: false,
        playing: false,
        buzzing: false,
      },
      {
        word: '4',
        // word: '我的家庭',
        audio: new Audio(`data:audio/mpeg;base64,${四}`),
        correct: false,
        disabled: false,
        playing: false,
        buzzing: false,
      },
      {
        word: '1',
        // word: '他们',
        audio: new Audio(`data:audio/mpeg;base64,${一}`),
        correct: false,
        disabled: false,
        playing: false,
        buzzing: false,
      },
    ],
  };
}
