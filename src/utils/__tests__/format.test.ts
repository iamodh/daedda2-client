import { formatDateToKoreanShort } from '@/utils/format';

import { describe, it, expect } from 'vitest';

describe('formatDateToKoreanShort', () => {
  it('올바른 형식의 문자열을 반환한다.', () => {
    const input = new Date().toISOString();

    const result = formatDateToKoreanShort(input);

    expect(result).toMatch(
      /^(?:[1-9]|1[0-2])\/(?:[1-9]|[12][0-9]|3[01]) \((?:일|월|화|수|목|금|토)\)$/
    );
  });
});
