console.log('test')
const convertTime = require('./timeWord');



describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof convertTime).toBe('function');
  })
  test('works', () => {
    expect(convertTime('10-09')).toEqual("ten o' nine a.m.")
    expect(convertTime('12-00')).toEqual("noon")
    expect(convertTime('00-00')).toEqual("midnight")
    expect(convertTime('12-09')).toEqual("twelve o' nine p.m.")
    expect(convertTime('18-15')).toEqual("six fifteen p.m.")
    expect(convertTime('13-45')).toEqual("one fourtyfive p.m.")
    expect(convertTime('03-29')).toEqual("three twentynine a.m.")
    expect(convertTime('20-38')).toEqual("eight thirtyeight p.m.")
    expect(convertTime('19-19')).toEqual("seven nineteen p.m.")
    expect(convertTime('08-12')).toEqual("eight twelve a.m.")
  })

});