
$w = $(window)
$w.scroll ->
  scroll = $w.scrollTop()
  topBar = $('#top-bar')
  topBarContent = $('#top-bar-content')
  topScroll = 63

  topBar.css 'height', topBarContent[0].offsetHeight
  if scroll > topScroll
    topBarContent.addClass('fixed')
  if scroll <= topScroll
    topBarContent.removeClass('fixed')


###
.directive "floating", ->
  restrict: "C"
  link: (scope, $element, attrs) ->
    elem        = $element
    elemBox     = $('.to-floating')
    elemTop     = 0
    elemHeight  = 0
    isFixed     = false
    firstScroll = true
    $w          = $(window)

    $w.scroll ->
      if(firstScroll)
        elemTop = elem.offset().top
        elemHeight = elem[0].offsetHeight
        firstScroll = false

      elem.css
        minHeight: elemHeight

      scrollTop = $w.scrollTop()
      shouldBeFixed = scrollTop > elemTop
      if shouldBeFixed and not isFixed
        elem.addClass('active')
        elemBox.css
          position: 'fixed'
          top: 0
          zIndex: 300
          width: '100%'
        isFixed = true
      else if not shouldBeFixed and isFixed
        elem.removeClass('active')
        elemBox.css position: 'static'
        isFixed = false
      return
    return
  transclude: true
  replace: true
  template: "<div><div class='to-floating' ng-transclude></div></div>"
###
