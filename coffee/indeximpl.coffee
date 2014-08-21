module.exports = class indeximpl 

  constructor: ($) ->
    # body...
 
  
  @init:($)->
    
 
    $.index.addEventListener "open", (e) ->
      Alloy.Globals.currentTab = e.source.activeTab if e?.source?.activeTab?
    $.index.addEventListener "focus", (e) ->
      Alloy.Globals.currentTab = e.tab if e?.tab?
    $.index.addEventListener "close", ->
      $.destroy()
    
    $.index.open()
    