function timeToSeconds(timeStr) {
  const [mm, ss] = timeStr.split(":").map(Number);
  return mm * 60 + ss;
}

function secondsToTime(seconds) {
  const mm = Math.floor(seconds / 60);
  const ss = seconds % 60;
  return `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
}

function solution(video_len, pos, op_start, op_end, commands) {
  const videoLenSec = timeToSeconds(video_len);
  let posSec = timeToSeconds(pos);
  const opStartSec = timeToSeconds(op_start);
  const opEndSec = timeToSeconds(op_end);
  
  for (const command of commands) {
       // 오프닝 구간에 있으면 오프닝 끝으로 이동
      if (opStartSec <= posSec && posSec <= opEndSec) {
          posSec = opEndSec;
      }
      if (command === "prev") {
          posSec = Math.max(0, posSec - 10);
      } else if (command === "next") {
          posSec = Math.min(videoLenSec, posSec + 10);
      }
      
      // 오프닝 구간에 있으면 오프닝 끝으로 이동
      if (opStartSec <= posSec && posSec <= opEndSec) {
          posSec = opEndSec;
      }
  }
  
  return secondsToTime(posSec);
}