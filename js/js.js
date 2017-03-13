/**
 * Created by xiaoxia on 2017/3/11.
 */
$(function(){
    $('.tab_uls li').on("click",function(){
        $(this).addClass('hover').siblings().removeClass("hover")
    })
    $(".icon-remove-sign").addClass("none")
    var btn=1;
    $(".edit").on("click",function(){
        if(btn==1){
            $(this).html("添加")
            $(".add").addClass("block").removeClass("none")
            $(".icon-remove-sign").addClass("block").removeClass("none")
            $(".addbtn").on("click",function(){
                $(".addinfo").addClass("block").removeClass("none")
            })
            $(".subbtn").on("click",function(){
                if(!($('.prompt').val()).trim()==''){
                    $(".uls").append( $("<li><button class='btn btn-default'>"+$('.prompt').val()+"</button><i class='icon-remove-sign'></i></li>"))
                    $(".addinfo").addClass("none").removeClass("block")
                }
            })
            btn=0
        }
        else if(btn==0){
            $(".addinfo").addClass("none").removeClass("block")
            $(this).html("编辑")
            $(".add").addClass("none").removeClass("block")
            $(".icon-remove-sign").addClass("none").removeClass("block")
            btn=1
        }
    })
    $(".uls li").on("click",".icon-remove-sign",function(){
        $(this).parent("li").remove()
    })
})



















