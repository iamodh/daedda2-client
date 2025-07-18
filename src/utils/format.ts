export function formatDateToKoreanShort(dateString: string): string {
  const date = new Date(dateString);

  const month = date.getMonth() + 1; // 0-based
  const day = date.getDate();

  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = dayNames[date.getDay()];

  return `${month}/${day} (${dayOfWeek})`;
}
