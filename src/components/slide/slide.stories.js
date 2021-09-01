import slide from './slide.vue'

export default {
  title: 'slide',
  component: slide,
  argTypes: {
    onNextSlide: {
      action: 'onNextSlide',
      description: 'after button NextSlide'
    },
    onPrevSlide: {
      action: 'onPrevSlide',
      description: 'after button PrevSlide'
    },
    onProgressFinish: {
      action: 'onProgressFinish',
      description: 'after progress'
    }
  }
}

const template = (args) => ({
  components: { slide },
  data () {
    return {
      data: {
        id: 'id',
        username: 'hello',
        userAvatar: 'https://picsum.photos/100/100',
        content: '<H1>Content</H1>'
      },
      args
    }
  },
  template: `<slide
                    :data="data" 
            />`
})

export const Default = template.bind({})
Default.story = {
  name: 'Слайд неактивный'
}

const templateActiveWithButtonR = (args) => ({
  components: { slide },
  data () {
    return {
      data: {
        id: 'id',
        username: 'hello',
        userAvatar: 'https://picsum.photos/100/100',
        content: '<H1>Content</H1>'
      },
      activeBtns: ['next'],
      args
    }
  },
  template: `<slide
              :data="data"
              active
              :btnsShown="activeBtns"
              @onNextSlide="args.onNextSlide"
              @onPrevSlide="args.onPrevSlide"
              @onProgressFinish="args.onProgressFinish"
            />`
})

export const ActiveWithButtonR = templateActiveWithButtonR.bind({})
ActiveWithButtonR.story = {
  name: 'Слайд активный c навигацией враво'
}

const templateActiveWithButtonL = (args) => ({
  components: { slide },
  data () {
    return {
      data: {
        id: 'id',
        username: 'hello',
        userAvatar: 'https://picsum.photos/100/100',
        content: '<H1>Content</H1>'
      },
      activeBtns: ['prev'],
      args
    }
  },
  template: `<slide
              :data="data"
              active
              :btnsShown="activeBtns"
              @onPrevSlide="args.onPrevSlide"
              @onProgressFinish="args.onProgressFinish"
            />`
})

export const ActiveWithButtonL = templateActiveWithButtonL.bind({})
ActiveWithButtonL.story = {
  name: 'Слайд активный c навигацией влево'
}

const templateNoContent = (args) => ({
  components: { slide },
  data () {
    return {
      data: {
        id: 'id',
        username: 'hello',
        userAvatar: 'https://picsum.photos/100/100',
        content: ''
      },
      args
    }
  },
  template: `<slide
              :data="data"
            />`
})

export const DefaultNoContent = templateNoContent.bind({})
DefaultNoContent.story = {
  name: 'Слайд неактивный без контента'
}

const templateActive = (args) => ({
  components: { slide },
  data () {
    return {
      data: {
        id: 'id',
        username: 'hello',
        userAvatar: 'https://picsum.photos/100/100',
        content: '<H1>Content</H1>'
      },
      args
    }
  },
  template: `<slide
              :data="data"
              active
              @onNextSlide="args.onNextSlide"
              @onPrevSlide="args.onPrevSlide"
              @onProgressFinish="args.onProgressFinish"
            />`
})

export const DefaultActive = templateActive.bind({})
DefaultActive.story = {
  name: 'Слайд активный'
}

const templateLoading = (args) => ({
  components: { slide },
  data () {
    return {
      data: {
        id: 'id',
        username: 'hello',
        userAvatar: 'https://picsum.photos/100/100',
        content: '<H1>Content</H1>'
      },
      args
    }
  },
  template: `<slide
              :data="data"
              active
              loading
              btnsShown=[]
              @onProgressFinish="args.onProgressFinish"
            />`
})

export const DefaultLoading = templateLoading.bind({})
DefaultLoading.story = {
  name: 'Слайд с загрузкой без кнопок'
}
