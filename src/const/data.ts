export interface SomeItem {
  itemId: string
  itemName: string
  special?: boolean
}

export const data: SomeItem[] = [
  {
    itemId: '1',
    itemName: 'Item 1'
  },
  {
    itemId: '2',
    itemName: 'Item 2'
  },
  {
    itemId: '3',
    itemName: 'Item 3'
  },
  {
    itemId: '4',
    itemName: 'Item 4',
    special: true
  }
]
