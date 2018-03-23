import { lorem, internet } from 'faker'

export const user = {
  get email () {
    return internet.email()
  },
  get avatar () {
    return internet.avatar()
  }
}

export const message = {
  createdAt: new Date(),
  get text () {
    return lorem.paragraph()
  },
  user,
  userId: 'O9D04CLWHNn8YA7S'
}

export const channel = {
  createdAt: new Date(),
  get name () {
    return lorem.word(2)
  },
  get messageCount () {
    return Math.round(Math.random() * 10)
  }
}
