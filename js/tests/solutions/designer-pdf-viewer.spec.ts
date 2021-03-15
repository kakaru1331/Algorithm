import { designerPdfViewer } from '@solutions/designer-pdf-viewer'

describe('designerPdfViewer', () => {
  test('case 1', () => {
    const heights = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]

    const actual = designerPdfViewer(heights, 'abc')
    const expected = 9

    expect(actual).toBe(expected)
  })

  test('case 2', () => {
    const heights = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]

    const actual = designerPdfViewer(heights, 'zaba')
    const expected = 28

    expect(actual).toBe(expected)
  })
})
