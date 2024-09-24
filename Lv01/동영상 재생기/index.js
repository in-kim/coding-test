const convertTimeToSeconds = (time, sliceString) => {
  if(!time || !sliceString) console.error("Error:convertTImeToSeconds => time, sliceString 매개변수 값이 없습니다.");

  const [mm, ss] = time.split(":").map(Number);

  return mm * 60 + ss;
}

const covertSecondsToTime = (seconds, mergeString) => {
  if(!seconds || !mergeString) console.error("Error:covertSecondsToTime => time, sliceString 매개변수 값이 없습니다.");

  const mm = formatTwoDigit(Math.floor(seconds / 60));
  const ss = formatTwoDigit(seconds % 60);

  return `${mm}${mergeString}${ss}`;
}

const formatTwoDigit = (time) => {
  return time > 10 ? time : `0${time}`;
}

function solution(video_len, pos, op_start, op_end, commands) {
  const currentSeconds = convertTimeToSeconds(pos, ":");
  const videoPlaySeconds = convertTimeToSeconds(video_len, ":");
  const openingStartSeconds = convertTimeToSeconds(op_start, ":");
  const openingEndSeconds = convertTimeToSeconds(op_end, ":");

  var answer = currentSeconds;

  const prev = () => answer = Math.max(0, answer - 10);

  const next = () => {
      answer = Math.min(videoPlaySeconds, answer + 10);

  };

  const openingSkip = () => {
      if(openingStartSeconds <= answer && openingEndSeconds >= answer) {
          answer = openingEndSeconds;
      }
  }

  if(Array.isArray(commands)) {
      const mapper = {
          "next": () => next(),
          "prev": () => prev(),
      };

      commands.forEach(command => {
          openingSkip();
          mapper[command]();
          openingSkip();
      });
  }
  
  return covertSecondsToTime(answer, ":");
}