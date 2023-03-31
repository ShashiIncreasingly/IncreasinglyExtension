var userLg = ""
chrome.storage.local.get('updateTextTo', function (items) {
    userLg = items.updateTextTo
});
var userapikey = ""
chrome.storage.local.get('updateTextToAPI', function (itemsapi) {
    userapikey = itemsapi.updateTextToAPI
});
var clientregion = ''
chrome.storage.local.get('updateTextToregion', function (itemsregion) {
    clientregion = itemsregion.updateTextToregion
});
var logoutupdt = ''
chrome.storage.local.get('updatelogout', function (itemsregion) {
    logoutupdt = itemsregion.updatelogout
});

setTimeout(function(){
    if(logoutupdt == 'logout'){
        jQuery('.bundle-disable').remove();
        jQuery('.btn-disable-modal').remove();
    }
},100)
var modal = document.querySelector('#ic_bundle_popup');
var api_key = "";
localStorage.setItem('bundle_check', 'false');
if (document.querySelector('.bundle-disable') == null && modal == null) {
    if (document.querySelector('.inc_pdp_block .inc_product_block') != null && document.querySelector('.bundle-disable') == null) {
        jQuery('.inc_pdp_block .inc_product_block').prepend('<div style="display:inline-block;cursor:pointer;float:right;z-index:99;margin-top:1px;margin-right:2px;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:20px;height:20px;margin-top:0px;" title="Remove"/></div></div>');
    }else if (document.querySelector('.columns .main') != null) {
        $('#ic_bundle_pdp .bundle_links .bundle_link').prepend('<div style="display:inline-block;cursor:pointer;float:right;margin-top:8px;margin-right:-15px;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:15px;height:15px;margin-top:-5px;" title="Remove"/></div></div>');
    } else if (document.querySelector('#ProductPage #ic_bundle_pdp .bundle_link') != null) {
        $('#ic_bundle_pdp .bundle_links .bundle_link').prepend('<div style="display:inline-block;cursor:pointer;float:right;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:15px;height:15px;margin-right:5px;margin-top:20px;" title="Remove"/></div></div>');
    } else if (window.location.host == "www.supersmart.com" && document.querySelector('.bundle-disable') == null) {
        $('#ic_bundle_pdp .bundle_links .bundle_link').append('<div style="display:inline-block;cursor:pointer;float:right;margin-right:5px;margin-top:-30px;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:15px;height:15px;margin-right:8px;" title="Remove"/></div></div>');
    } else if (window.location.host == "store.hp.com" && document.querySelector('.bundle-disable') == null) {
        jQuery('.inc_pdp_block .inc_product_block').prepend('<div style="display:inline-block;cursor:pointer;float:right;z-index:99;margin-top:1px;margin-right:2px;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:20px;height:20px;margin-top:0px;" title="Remove"/></div></div>');
    }  else {
        if ($('#ic_bundle_pdp .bundle_links .bundle_link').length == 1) {
            $('#ic_bundle_pdp .ic_header_wrapper').prepend('<div style="display:inline-block;cursor:pointer;float:right;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:15px;height:15px;margin-top:8px;padding-right:5px;" title="Remove"/></div></div>');
        } else {
            if (document.querySelector('.inc_new_temp') != null) {
                $('#ic_bundle_pdp .ic_product .ic_prod_details').prepend('<div style="display:inline-block;cursor:pointer;position:absolute;top:0;right:0;left:auto;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:30px;height:25px;margin-top:8px;padding-right:5px;" title="Remove"/></div></div>');
            } else {

                if (window.location.host == "www.samsung.com" && document.querySelector('.active_popup') == null && document.querySelector('.bundle-disable') == null) {
                    $('#ic_bundle_pdp .bundle_links .bundle_link').append('<div style="display:inline-block;cursor:pointer;float:right;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:15px;height:15px;margin-top:8px;padding-right:5px;" title="Remove"/></div></div>');
                } else {
                    $('#ic_bundle_pdp .bundle_links .bundle_link').prepend('<div style="display:inline-block;cursor:pointer;float:right;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:15px;height:15px;margin-top:8px;padding-right:5px;" title="Remove"/></div></div>');
                }

            }

        }
    }
}else if(window.location.host == "www2.avoncosmetics.cz" || window.location.host == "www2.pl.avon.com"){
    $('#ic_bundle_pdp .ic_product .ic_prod_details').prepend('<div style="display:inline-block;cursor:pointer;position:absolute;top:0;right: auto;left: 4px;z-index: 1;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:30px;height:25px;margin-top:8px;padding-right:5px;" title="Remove"/></div></div>');
    $('#ic_bundle_popup .ic_product .ic_prod_details').prepend('<div style="display:inline-block;cursor:pointer;position:absolute;top:0;right: auto;left: 4px;z-index: 1;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:30px;height:25px;margin-top:8px;padding-right:5px;" title="Remove"/></div></div>');
}

if (document.querySelector('.bundle-disable') == null && document.querySelector('.full-layout-container .bundle_tabs .bundle_tablinks') != null) {
    localStorage.setItem('bundle_check', 'false');
    jQuery('#inc-template .bundle_tabs .bundle_tablinks').append('<div style="display:inline-block;cursor:pointer;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:20px;height:20px;" title="Remove"/></div></div>');
} else if (document.querySelector('.bundle-disable') == null && document.querySelector('.prod-detail .ic_bundle_wrap_div li') != null) {
    localStorage.setItem('bundle_check', 'false');
    $('.prod-detail .ic_bundle_wrap_div li').prepend('<div style="display:inline-block;cursor:pointer;float:right;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:15px;height:15px;margin-top:12px;margin-right:-15px;" title="Remove"/></div></div>');
} else if (document.querySelector('.bundle-disable') == null && document.querySelector('#bundle-product-wrapper .ic_bundle_wrap_div .ic-bundle .ic-header-wrapper') != null) {
    jQuery('.ic_bundle_wrap_div .ic-header-wrapper li').append('<div style="display:inline-block;cursor:pointer;float:right;margin-top:-60px;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:15px;height:15px;margin-top:30px;" title="Remove"/></div></div>');
} else if (document.querySelector('.bundle-disable') == null && document.querySelector('.product_page_content .ic_bundle_wrap_div .ic-bundle .ic-header-wrapper') != null) {
    jQuery('.ic_bundle_wrap_div .ic-header-wrapper li').append('<div style="display:inline-block;cursor:pointer;float:right;margin-top:-60px;margin-right:-12px;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:15px;height:15px;margin-top:30px;" title="Remove"/></div></div>');
} else if (document.querySelector('.bundle-disable') == null && document.querySelector('#increasingly-catalog-product3 .inc_tab_links') != null) { //TP
    localStorage.setItem('bundle_check', 'false');
    $('#increasingly-catalog-product3 .inc_tab_links').prepend('<div style="display:inline-block;cursor:pointer;float:right;margin-left:5px;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:20px;height:20px;margin-top:5px;" title="Remove"/></div></div>');
} else if (document.querySelector('.bundle-disable') == null && document.querySelector('#increasingly-catalog-product3 .bundle_tablinks') != null) { //IM
    localStorage.setItem('bundle_check', 'false');
    $('#increasingly-catalog-product3 .bundle_tablinks span').prepend('<div style="display:inline-block;cursor:pointer;float:right;margin-left:5px;margin-top: -5px;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:20px;height:20px;margin-top:5px;" title="Remove"/></div></div>');
} else if (document.querySelector('.bundle-disable') == null && document.querySelector('#inc-template') != null) { //RC
    localStorage.setItem('bundle_check', 'false');
    $('#inc-template .bundle-prods-holder').prepend('<div style="display:inline-block;cursor:pointer;float:right;margin-left:5px;margin-top: -5px;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:20px;height:20px;margin-top:5px;" title="Remove"/></div></div>');
} else if (document.querySelector('.bundle-disable') == null && document.querySelector('#configurator-wrapper .ic_bundle_wrap_div .ic-bundle .ic-header-wrapper') != null) {
    localStorage.setItem('bundle_check', 'false');
    jQuery('.ic_bundle_wrap_div .ic-header-wrapper li').append('<div style="display:inline-block;cursor:pointer;float:right;margin-top:-60px;margin-right:-12px;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:15px;height:15px;margin-top:30px;" title="Remove"/></div></div>');
}
//modal page

if (modal != null && document.querySelector('.btn-disable-modal') == null) {
    if (document.querySelector('.product .ic_bundle_pop .pdt_img') != null) {
        jQuery('.product .ic_bundle_pop .pdt_img').prepend('<div style="display:inline-block;margin-top:0px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
        setTimeout(function() {
            if (document.querySelector('.ic_product_bundling div[category="Deal of the day"] .btn-disable-modal') != null) {
                document.querySelector('.ic_product_bundling div[category="Deal of the day"] .btn-disable-modal').style.display = 'none';
            }
        }, 300);
    } else if (document.querySelector('.inc_sidebar_modal_block .inc_recommended_products_list_block .inc_product_block .inc_product_img_block') != null && document.querySelector('.inc_sidebar_modal_block .btn-disable-modal') == null) {
        jQuery('.inc_sidebar_modal_block .inc_recommended_products_list_block .inc_product_block .inc_product_img_block').append('<div style="display:inline-block;margin-top:-20px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;margin-left:-10px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;margin-left:-10px;" title="Remove Bundle"/></div></div>');
    } else if (window.location.host == "www.annsummers.com" && document.querySelector('.ic_product_bundling .ic_product .pdt_img') != null) {
        if (document.querySelector('#ic_bundle_popup .ic_product_bundling').classList.contains('promo_applied') == true) {
            jQuery('#ic_bundle_popup .ic_product_bundling .ic_product .pdt_img').prepend('<div style="display:inline-block;margin-top:0px;margin-bottom:5px;cursor:pointer;position: absolute;right: 0;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
        } else {
            jQuery('#ic_bundle_popup .ic_product_bundling .ic_product .pdt_img').prepend('<div style="display:inline-block;margin-top:0px;margin-bottom:5px;cursor:pointer;position: absolute;right: 0;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
        }

    } else {
        if (document.querySelector('.inc_new_temp') != null || window.location.host == "www.ellaparadis.com") {
            if (window.location.host == "www.partycity.com") {
                jQuery('.ic_bundle_pop .ic_product .ic_prod_details').prepend('<div style="display:inline-block;top:5px;cursor:pointer;z-index:99;position:absolute;right:-10px;left:auto;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:25px;height:25px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
            } else {
                jQuery('.ic_bundle_pop .ic_product .ic_prod_details').prepend('<div style="display:inline-block;top:5px;cursor:pointer;position:absolute;right:0;left:auto;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:25px;height:25px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
            }
        } else {
            if (window.location.host == "www.samsung.com" && document.querySelector('#ic_bundle_popup .bundle-disable') == null) {
                jQuery('.ic_bundle_pop .ic_product .ic_prod_details').prepend('<div style="display:inline-block;margin-top: -30px;cursor:pointer;position: absolute;top: 0;bottom: auto;left: auto;right: 0;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
            } else {
                if (document.querySelector('.ic_bundle_pop .ic_product .info_wrap') != null) {
                    if (window.location.host == "www.partycity.com") {
                        jQuery('.ic_bundle_pop .ic_product .info_wrap').prepend('<div style="display:inline-block;cursor:pointer;z-index: 99;position: absolute;left: auto;right: -2px;top: 0;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
                    } else {
                        jQuery('.ic_bundle_pop .ic_product .info_wrap').prepend('<div style="display:inline-block;margin-top:-18px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
                    }
                } else {
                    jQuery('#ic_bundle_popup .ic_bundle .ic_product .info_wrap').prepend('<div style="display:inline-block;margin-top:-18px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
                }

            }

        }

    }

} else if (window.location.host == "www.rutlandcycling.com" && document.querySelector('.btn-disable-modal') == null) {
    jQuery('.inc_minibasket_modal .cartProd_Panel .detail_wrap').prepend('<div style="display:inline-block;margin-top:-20px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
} else if (document.querySelector('.inc_minibasket_modal-content .bundle-prods-holder') != null && document.querySelector('.btn-disable-modal') == null) {
    jQuery('.inc_minibasket_modal-content .bundle-prods-holder .prod-holdermodal').prepend('<div style="display:inline-block;margin-top:-15px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
} else if (document.querySelector('.model_wrapper .ic-product-wrapper .ic_product_bundling') != null && document.querySelector('.btn-disable-modal') == null) {
    if (document.querySelector('.active_popup') != null) {
        jQuery('.model_wrapper .ic-product .name_opt_wrap').prepend('<div style="display:inline-block;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:15px;height:15px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
    }

} else if (document.querySelector('#inc-templatemodal .prodTabli .look-buy_product_details') != null && document.querySelector('.btn-disable-modal') == null) {
    jQuery('.inc_minibasket_modal .prodTabli .look-buy_product_details').prepend('<div style="display:inline-block;margin-top:-5px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
} else if (document.querySelector('#inc-templatemodal .myCartFormmodal') != null && document.querySelector('.btn-disable-modal') == null) {
    jQuery('.inc_minibasket_modal .myCartFormmodal').prepend('<div style="display:inline-block;margin-top:0px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
} else if (document.querySelector('.inc_innov8') != null && document.querySelector('.btn-disable-modal') == null) {
    if (document.querySelector('#inc-templatemodal .cartProd_Panel') != null && document.querySelector('.btn-disable-modal') == null) {
        jQuery('.inc_minibasket_modal .cartProd_Panel .prod_details_div').prepend('<div style="display:inline-block;margin-top:-20px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
    }
} else if (document.querySelector('#inc-templatemodal .cartProd_Panel') != null && document.querySelector('.btn-disable-modal') == null) {
    jQuery('.inc_minibasket_modal .cartProd_Panel .detail_wrap').prepend('<div style="display:inline-block;margin-top:-20px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
} else if (window.location.host == "store.hp.com" && document.querySelector('.inc_sidebar_modal_block .btn-disable-modal') == null) {
    jQuery('.inc_sidebar_modal_block .inc_recommend_items_listing_products_list_block .inc_product_block .inc_product_img_block').append('<div style="display:inline-block;margin-top:-20px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;margin-left:-10px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;margin-left:-10px;" title="Remove Bundle"/></div></div>');
} else if (document.querySelector('.inc_sidebar_modal_block .inc_recommend_items_listing_products_list_block .inc_product_block .inc_product_img_block') != null && document.querySelector('.inc_sidebar_modal_block .btn-disable-modal') == null) {
    jQuery('.inc_sidebar_modal_block .inc_recommend_items_listing_products_list_block .inc_product_block .inc_product_img_block').append('<div style="display:inline-block;margin-top:-20px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;margin-left:-10px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;margin-left:-10px;" title="Remove Bundle"/></div></div>');
} else if (document.querySelector('.inc_sidebar_modal_block .inc_recommended_products_list_block .inc_product_block .inc_product_img_block') != null && document.querySelector('.inc_sidebar_modal_block .btn-disable-modal') == null) {
    jQuery('.inc_sidebar_modal_block .inc_recommended_products_list_block .inc_product_block .inc_product_img_block').append('<div style="display:inline-block;margin-top:-20px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;margin-left:-10px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;margin-left:-10px;" title="Remove Bundle"/></div></div>');
}
if (document.querySelector('.catalog-product-view .ic_product_wrapper .ic_product_bundling') != null && document.querySelector('.btn-disable-modal') == null) {
    jQuery('.modal_wrapper  .ic_product_wrapper .ic_product_bundling .ic_product').append('<div style="display:inline-block;margin-top:-20px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;margin-left:-10px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;margin-left:-10px;" title="Remove Bundle"/></div></div>');
}

//cart page
var cart = document.querySelector('#ic_bundle_cart');
if (cart != null && document.querySelector('.checkout-cart-index .prod-holder') == null && document.querySelector('.btn-disable-modal') == null && window.location.host != "www.partycity.com") {
    jQuery('.inc_bundling_cart .ic_product .info_wrap').prepend('<div style="display:inline-block;margin-top:-5px;z-index:99;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
} else if (document.querySelector('.inc_af_block .inc_product_block .inc_product_img_block') != null && document.querySelector('.inc_am_block .btn-disable-modal') == null) {
    if(document.querySelector('.inc_af_block .inc_product_block .inc_product_img_block .modal_btn') == null){   
        jQuery('.inc_af_block .inc_product_block .inc_product_img_block').prepend('<div style="display:inline-block;margin-bottom:5px;z-index:99;cursor:pointer;float:right;margin-left:175px;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
    }
} else if (document.querySelector('.inc_am_block .inc_product_block .inc_product_img_block') != null && document.querySelector('.inc_am_block .btn-disable-modal') == null) {
    jQuery('.inc_am_block .inc_product_block .inc_product_img_block').prepend('<div style="display:inline-block;margin-bottom:5px;z-index:99;cursor:pointer;float:right;margin-left:175px;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
} else if (document.querySelector('.checkout-cart-index .prod-holder') != null && document.querySelector('.btn-disable-modal') == null) {
    jQuery('.checkout-cart-index .prod-holder').prepend('<div style="display:inline-block;margin-top:-5px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
} else if (document.querySelector('.cart-bundle .ic-product-wrapper .ic-product') != null && document.querySelector('.btn-disable-modal') == null) {

    if (document.querySelector('.toko-left-content .bind_btn_price') != null) {
        jQuery('.toko-left-content .bind_btn_price').prepend('<div style="display:inline-block;margin-top:-60px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
    } else {
        jQuery('.cart-bundle .ic-product .name_opt_wrap').prepend('<div style="display:inline-block;margin-top:-5px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
    }
} else if (document.querySelector('#increasingly-page-cart1 .product-bundle') != null && document.querySelector('.btn-disable-modal') == null) { //IM
    jQuery('.increasingly_element .product-bundle').prepend('<div style="display:inline-block;margin-top:-10px;margin-right:5px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
} else if (document.querySelector('#inc-carttemplate .prod-holder') != null && document.querySelector('.btn-disable-modal') == null) { //RC
    jQuery('#inc-carttemplate .prod-holder').prepend('<div style="display:inline-block;margin-top:0px;margin-right:-6px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
} else if (document.querySelector('.cart-container #inc-carttemplate .cartProd_Panel') != null && document.querySelector('.btn-disable-modal') == null) { //RC
    jQuery('#inc-carttemplate .ptab-content .look-buy_product_details').prepend('<div style="display:inline-block;margin-top:-24px;margin-right:-6px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
} else if (document.querySelector('#increasingly-page-cart1 .bundles-wrapper') != null && document.querySelector('.btn-disable-modal') == null) { //TP
    jQuery('.increasingly_element form .bundles-wrapper').prepend('<div style="display:inline-block;margin-top:-20px;margin-right:5px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background:#fafafa;" title="Remove Bundle"/></div></div>');
} else if (window.location.host == "www.partycity.com" && document.querySelector('.btn-disable-modal') == null) {
    jQuery('.inc_bundling_cart .ic_product .ic_prod_details').prepend('<div style="display:inline-block;margin-bottom:5px;z-index:99;cursor:pointer;float:right;margin-left:175px;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
}   else if (window.location.host == "store.hp.com" && document.querySelector('.inc_am_block .btn-disable-modal') == null) {
    jQuery('.inc_af_block .inc_product_block .inc_product_img_block').prepend('<div style="display:inline-block;margin-bottom:5px;z-index:99;cursor:pointer;float:right;margin-left:175px;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;" title="Remove Bundle"/></div></div>');
}

//after modal 
if (document.querySelector('#increasingly_element_after_modal') != null && document.querySelector('#increasingly_element_after_modal .bundle-disable') == null) {
    $('#increasingly_element_after_modal .ic_product .ic_prod_details').prepend('<div style="display:inline-block;cursor:pointer;position:absolute;top:34px;right:-3px;left:auto;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:30px;height:25px;margin-top:8px;padding-right:5px;" title="Remove"/></div></div>');
}
//fbt page
var inc_fbt_layout = document.querySelectorAll('#inc_fbt_layout .ic_product .ic_prod_details');
for(d=0;d<inc_fbt_layout.length;d++){
    if (inc_fbt_layout[d] != null && inc_fbt_layout[d].parentElement.querySelector('.bundle-disable') == null) {
        var elm_fbt = inc_fbt_layout[d]
        $(elm_fbt).prepend('<div style="display:inline-block;cursor:pointer;position:absolute;top:34px;right:-3px;left:auto;" id="bundle-disable" class="bundle-disable"><div style="display:inline-block;"><img src="https://www.increasingly.co/ban.png" style="width:30px;height:25px;margin-top:8px;padding-right:5px;" title="Remove"/></div></div>');
    }
}
$('.inc_recommended_tabs_list_item_block').on('click', function(e) {
    if (window.location.host == "store.hp.com" && document.querySelector('.inc_sidebar_modal_block .btn-disable-modal') == null) {
        jQuery('.inc_sidebar_modal_block .inc_recommend_items_listing_products_list_block .inc_product_block .inc_product_img_block').append('<div style="display:inline-block;margin-top:-20px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;margin-left:-10px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;margin-left:-10px;" title="Remove Bundle"/></div></div>');
    } else if (document.querySelector('.inc_sidebar_modal_block .inc_recommend_items_listing_products_list_block .inc_product_block .inc_product_img_block') != null && document.querySelector('.inc_sidebar_modal_block .btn-disable-modal') == null) {
        jQuery('.inc_sidebar_modal_block .inc_recommend_items_listing_products_list_block .inc_product_block .inc_product_img_block').append('<div style="display:inline-block;margin-top:-20px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;margin-left:-10px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;margin-left:-10px;" title="Remove Bundle"/></div></div>');
    } else if (document.querySelector('.inc_sidebar_modal_block .inc_recommended_products_list_block .inc_product_block .inc_product_img_block') != null && document.querySelector('.inc_sidebar_modal_block .btn-disable-modal') == null) {
        jQuery('.inc_sidebar_modal_block .inc_recommended_products_list_block .inc_product_block .inc_product_img_block').append('<div style="display:inline-block;margin-top:-20px;margin-bottom:5px;cursor:pointer;float:right;" class="btn-disable-modal modal_btn"><div style="display:inline-block;width:20px;height:20px;margin-left:-10px;"><img src="https://www.increasingly.co/ban.png" style="width:100%;height:100%;background: #fafafa;margin-left:-10px;" title="Remove Bundle"/></div></div>');
    }
    $('.btn-disable-modal, .btn-disable-cart').on('click', function(e) {
        e.currentTarget.parentNode.parentNode.parentNode.querySelector('.inc_add_to_basket_btn')
        if (e.currentTarget.parentNode.parentNode.querySelector('.inc_add_to_basket_btn')) {
            if (e.currentTarget.parentNode.classList.contains('ic_product')) {
                var val = e.currentTarget.parentNode.querySelector('.inc_add_to_basket_btn').getAttribute('onclick');
                var bundle_id_modal = val.split(',')[1];
            } else {
                var val = e.currentTarget.parentNode.parentNode.querySelector('.inc_add_to_basket_btn').getAttribute('onclick');
                var bundle_id_modal = val.split(',')[1];
    
                if (e.currentTarget.parentNode.parentNode.parentNode.classList.contains('ic_product') == true) {
                    var p2 = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('data_selected_prod_id');
                } else {
                    var p2 = e.currentTarget.parentNode.parentNode.getAttribute('data_selected_prod_id');
                }
                if (document.querySelector('#ic_bundle_pdp .ic_product') != null) {
                    var p1 = document.querySelector('#ic_bundle_pdp .ic_product').getAttribute('data_selected_prod_id')
                } else {
                    var bun_res = JSON.parse(localStorage.getItem('inc_data'))
                    if (bun_res == null) {
                        var bun_res = JSON.parse(localStorage.getItem('inc_Cartdata'))
                    }
                    if (bun_res != null) {
                        for (k = 0; k < bun_res.Bundles.length; k++) {
                            if (bun_res.Bundles[k].BundleId == bundle_id_modal) {
                                if(bun_res.Bundles[k].Products != null){
                                    if (bun_res.Bundles[k].Products[0].ProductId != p2) {
                                        p1 = bun_res.Bundles[k].Products[0].ProductId;
                                    } else {
                                        p1 = bun_res.Bundles[k].Products[1].ProductId;
                                    }
                                }else{
                                    if (bun_res.Bundles[k].ProductIds[0] != p2) {
                                        p1 = bun_res.Bundles[k].ProductIds[0];
                                    } else {
                                        p1 = bun_res.Bundles[k].ProductIds[1];
                                    }
                                }
                            }
                        }
                        if (p1 == null || p1 == undefined) {
                            var p1 = localStorage.getItem('added_prd')
                        }
                    } else {
                        var p1 = localStorage.getItem('added_prd')
                    }
                }
            }
    
        } else if (e.currentTarget.parentNode.parentNode.parentNode.querySelector('.inc_add_to_basket_btn')) {
            if (e.currentTarget.parentNode.parentNode.classList.contains('ic_product')) {
                var val = e.currentTarget.parentNode.parentNode.querySelector('.inc_add_to_basket_btn').getAttribute('onclick');
                var bundle_id_modal = val.split(',')[1];
            } else {
                var val = e.currentTarget.parentNode.parentNode.parentNode.querySelector('.inc_add_to_basket_btn').getAttribute('onclick');
                var bundle_id_modal = val.split(',')[1];
                var p2 = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('data_selected_prod_id')
                if (document.querySelector('#ic_bundle_pdp .ic_product') != null) {
                    var p1 = document.querySelector('#ic_bundle_pdp .ic_product').getAttribute('data_selected_prod_id')
                } else {
                    var bun_res = JSON.parse(localStorage.getItem('inc_data'))
                    if (bun_res != null) {
                        for (k = 0; k < bun_res.Bundles.length; k++) {
                            if (bun_res.Bundles[k].BundleId == bundle_id_modal) {
                                if(bun_res.Bundles[k].Products != null){
                                    if (bun_res.Bundles[k].Products[0].ProductId != p2) {
                                        p1 = bun_res.Bundles[k].Products[0].ProductId;
                                    } else {
                                        p1 = bun_res.Bundles[k].Products[1].ProductId;
                                    }
                                }else{
                                    if (bun_res.Bundles[k].ProductIds[0] != p2) {
                                        p1 = bun_res.Bundles[k].ProductIds[0];
                                    } else {
                                        p1 = bun_res.Bundles[k].ProductIds[1];
                                    }
                                }
                            }
                        }
                        if (p1 == null || p1 == undefined) {
                            var p1 = localStorage.getItem('added_prd')
                        }
                    } else {
                        var p1 = localStorage.getItem('added_prd')
                    }
                }
            }
        }else if (document.querySelector('.ws-main-body-section .add-to-basket-btn')) {
            var val = e.currentTarget.parentNode.querySelector('.add-to-basket-btn').getAttribute('onclick')
            var bundle_id_modal = val.split(',')[1];
            var p2 = e.currentTarget.parentNode.querySelector('.add-to-basket-btn').getAttribute('id').replace("add_", "")
        } else if (e.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector('.model_wrapper .inc-add-to-basket')) {
            var bundle_id_modal = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('data-selected-bundle-id');
            var p2 = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('data-main-prod-id')
            var p1 = document.querySelector('.ic_bundle_wrap_div .ic-product').getAttribute('data-main-prod-id')
        } else if (e.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector('.cart-bundles .inc-add-to-basket')) {
            var bundle_id_modal = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('data-selected-bundle-id');
            var p2 = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('data-main-prod-id');
            var bun_res = JSON.parse(localStorage.getItem('response'))
            if (bun_res != null) {
                for (k = 0; k < bun_res.Bundles.length; k++) {
                    if (bun_res.Bundles[k].BundleId == bundle_id_modal) {
                        if(bun_res.Bundles[k].Products != null){
                            if (bun_res.Bundles[k].Products[0].ProductId != p2) {
                                p1 = bun_res.Bundles[k].Products[0].ProductId;
                            } else {
                                p1 = bun_res.Bundles[k].Products[1].ProductId;
                            }
                        }else{
                            if (bun_res.Bundles[k].ProductIds[0] != p2) {
                                p1 = bun_res.Bundles[k].ProductIds[0];
                            } else {
                                p1 = bun_res.Bundles[k].ProductIds[1];
                            }
                        }
                    }
                }
                if (p1 == null || p1 == undefined) {
                    var p1 = localStorage.getItem('added_prd')
                }
            } else {
                var p1 = localStorage.getItem('added_prd')
            }
        } else if (document.querySelector('#inc-templatemodal .prodTabli .look-buy_product_details') != null) {
            var bundle_id_modal = e.currentTarget.parentNode.parentNode.parentNode.querySelector('.inc_submit').getAttribute('data-bundleid').split('_')[0]
            if (document.querySelector('.tpProductItem span') != null) {
                var p1 = document.querySelector('.tpProductItem span').innerText;
            } else {
                var p1 = localStorage.getItem('added_prd')
            }
            var p2 = e.currentTarget.parentNode.parentNode.parentNode.querySelector('.inc_submit').getAttribute('data-id');
        } else if (document.querySelector('#inc-templatemodal .myCartFormmodal') != null) {
            var json_datas = e.currentTarget.parentNode.querySelector('input[name="jsonData"]').value;
            var bundle = JSON.parse(json_datas);
            var bundle_id_modal = bundle[0].bundle_id;
            var p2 = bundle[0].params[0].product_id;
            var p1 = null;
            for (k = 0; k < bun_res.Bundles.length; k++) {
                if (bun_res.Bundles[k].BundleId == bundle_id_modal) {
                    if(bun_res.Bundles[k].Products != null){
                        p1 = bun_res.Bundles[k].Products[0].ProductId
                    }else{
                        p1 = bun_res.Bundles[k].ProductIds[0]
                    }
                }
            }
            //var bundle_id_modal = e.currentTarget.parentNode.querySelector('input[name="jsonData"]').id.replace('mydata','');
        } else if (document.querySelector('#inc-templatemodal .detail_wrap') != null) {
            var bundle_id_modal = e.currentTarget.parentNode.querySelector('.add-to-basket-btn').getAttribute('data-bundle-id');
        } else if (document.querySelector('#inc-templatemodal .prod_details_div') != null) {
            var bundle_id_modal = e.currentTarget.parentNode.parentNode.querySelector('.addtocartbtn').getAttribute('onclick').split(',')[1].replace(')', '')
            var p2 = e.currentTarget.parentNode.parentNode.querySelector('.addtocartbtn').getAttribute('prodid')
            var p1 = document.querySelector('input[name="product"]').value
        } else if (document.querySelector('#increasingly-page-cart1 .product-bundle') != null) {
            var json_datas = e.currentTarget.parentNode.querySelector('input[name="jsonData"]').value;
            var bundle = JSON.parse(json_datas);
            var bundle_id_modal = bundle[0].bundle_id;
            var p1 = bundle[0].params[0].product_id
            var p2 = bundle[0].params[1].product_id
            //var bundle_id_modal = e.currentTarget.parentNode.querySelector('input[name="jsonData"]').id.replace('mydata','');
        } else if (document.querySelector('#increasingly-page-cart1 .pro_name') != null) {
            var bundle_id_modal = e.currentTarget.parentNode.parentNode.parentNode.querySelector('.get-this-deal button').getAttribute('bundleid')
            var json_datas = e.currentTarget.parentNode.parentNode.parentNode.querySelector('input[name=jsonData]').value
            var bundle_s = JSON.parse(json_datas);
            var p1 = bundle_s[0].params[0].product_id
            var p2 = bundle_s[0].params[1].product_id
        } else if (document.querySelector('#inc-carttemplate .prod-holder') != null) {
            var bundle_id_modal = e.currentTarget.parentNode.id.split('_')[0];
        } else if (window.location.host == "www.inov-8.com") {
            var bundle_id_modal = e.currentTarget.parentNode.parentNode.querySelector('.addtocartbtn').getAttribute('onclick').split(',')[1];
            var p2 = e.currentTarget.parentNode.parentNode.querySelector('.addtocartbtn').getAttribute('prodid');
        } else if (document.querySelector('.ptab-content .tabs_pannel_content button') != null) {
            var bundle_id_modal = e.currentTarget.parentNode.querySelector('button').getAttribute('onclick').split(',')[1];
            var p2 = e.currentTarget.parentNode.querySelector('button').getAttribute('prodid');
            var p1 = localStorage.getItem('prodId');
        } else if (document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_sidebar_modal_block') != null || document.querySelector('.inc_af_block') != null || document.querySelector('.inc_am_block') != null) {
            var bundle_id_modal = e.currentTarget.parentNode.parentNode.getAttribute('data-bundleid');
            if (bundle_id_modal == null) {
                var bundle_id_modal = e.currentTarget.parentNode.getAttribute('data-bundle_id');
    
            }
            if (bundle_id_modal == null) {
                var bundle_id_modal = e.currentTarget.parentNode.parentNode.getAttribute('data-bundle_id');
            }
            var p1 = null
            if (document.querySelector('.inc_pdp_product-main_block .inc_product_block') != null) {
                p1 = document.querySelector('.inc_pdp_product-main_block .inc_product_block').getAttribute('data-id')
            }
            if (p1 == null) {
                var bun_res = JSON.parse(sessionStorage.getItem('bundleJSON'))
                if (bun_res != null) {
                    for (k = 0; k < bun_res.Bundles.length; k++) {
                        if (bun_res.Bundles[k].BundleId == bundle_id_modal) {
                            if(bun_res.Bundles[k].Products != null){
                                if (bun_res.Bundles[k].Products[0].ProductId != p2) {
                                    p1 = bun_res.Bundles[k].Products[0].ProductId;
                                } else {
                                    p1 = bun_res.Bundles[k].Products[1].ProductId;
                                }
                            }else{
                                if (bun_res.Bundles[k].ProductIds[0] != p2) {
                                    p1 = bun_res.Bundles[k].ProductIds[0];
                                } else {
                                    p1 = bun_res.Bundles[k].ProductIds[1];
                                }
                            }
                        }
                    }
                    if (p1 == null || p1 == undefined) {
                        var p1 = localStorage.getItem('added_prd')
                    }
                } else {
                    var p1 = localStorage.getItem('added_prd')
                }
            }
            var p2 = e.currentTarget.parentNode.parentNode.getAttribute('data-id')
        } else if (window.location.host == "store.hp.com") {
            var bundle_id_modal = e.currentTarget.parentNode.parentNode.getAttribute('data-bundleid');
            var p1 = null
            if (document.querySelector('.inc_pdp_product-main_block .inc_product_block') != null) {
                p1 = document.querySelector('.inc_pdp_product-main_block .inc_product_block').getAttribute('data-id')
            }
            if (p1 == null) {
                var bun_res = JSON.parse(sessionStorage.getItem('bundleJSON'))
                if (bun_res != null) {
                    for (k = 0; k < bun_res.Bundles.length; k++) {
                        if (bun_res.Bundles[k].BundleId == bundle_id_modal) {
                            if(bun_res.Bundles[k].Products != null){
                                if (bun_res.Bundles[k].Products[0].ProductId != p2) {
                                    p1 = bun_res.Bundles[k].Products[0].ProductId;
                                } else {
                                    p1 = bun_res.Bundles[k].Products[1].ProductId;
                                }
                            }else{
                                if (bun_res.Bundles[k].ProductIds[0] != p2) {
                                    p1 = bun_res.Bundles[k].ProductIds[0];
                                } else {
                                    p1 = bun_res.Bundles[k].ProductIds[1];
                                }
                            }
                        }
                    }
                    if (p1 == null || p1 == undefined) {
                        var p1 = localStorage.getItem('added_prd')
                    }
                } else {
                    var p1 = localStorage.getItem('added_prd')
                }
            }
            var p2 = e.currentTarget.parentNode.parentNode.getAttribute('data-id')
        }
    
        $('#exampleModalCenter').addClass('show');
        $('#exampleModalCenter').css('display', 'block');
        getBundleDetails(bundle_id_modal, p1, p2);
    })
});

$('.btn-disable-modal, .btn-disable-cart').on('click', function(e) {
    e.currentTarget.parentNode.parentNode.parentNode.querySelector('.inc_add_to_basket_btn')
    if (e.currentTarget.parentNode.parentNode.querySelector('.inc_add_to_basket_btn')) {
        if (e.currentTarget.parentNode.classList.contains('ic_product')) {
            var val = e.currentTarget.parentNode.querySelector('.inc_add_to_basket_btn').getAttribute('onclick');
            var bundle_id_modal = val.split(',')[1];
        } else {
            var val = e.currentTarget.parentNode.parentNode.querySelector('.inc_add_to_basket_btn').getAttribute('onclick');
            var bundle_id_modal = val.split(',')[1];

            if (e.currentTarget.parentNode.parentNode.parentNode.classList.contains('ic_product') == true) {
                var p2 = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('data_selected_prod_id');
            } else {
                var p2 = e.currentTarget.parentNode.parentNode.getAttribute('data_selected_prod_id');
            }
            if (document.querySelector('#ic_bundle_pdp .ic_product') != null) {
                var p1 = document.querySelector('#ic_bundle_pdp .ic_product').getAttribute('data_selected_prod_id')
            } else {
                var bun_res = JSON.parse(localStorage.getItem('inc_data'))
                if (bun_res == null) {
                    var bun_res = JSON.parse(localStorage.getItem('inc_Cartdata'))
                }
                if (bun_res != null) {
                    for (k = 0; k < bun_res.Bundles.length; k++) {
                        if (bun_res.Bundles[k].BundleId == bundle_id_modal) {
                            
                            if(bun_res.Bundles[k].Products != null){
                                if (bun_res.Bundles[k].Products[0].ProductId != p2) {
                                    p1 = bun_res.Bundles[k].Products[0].ProductId;
                                } else {
                                    p1 = bun_res.Bundles[k].Products[1].ProductId;
                                }
                            }else{
                                if (bun_res.Bundles[k].ProductIds[0] != p2) {
                                    p1 = bun_res.Bundles[k].ProductIds[0];
                                } else {
                                    p1 = bun_res.Bundles[k].ProductIds[1];
                                }
                            }
                        }
                    }
                    if (p1 == null || p1 == undefined) {
                        var p1 = localStorage.getItem('added_prd')
                    }
                } else {
                    var p1 = localStorage.getItem('added_prd')
                }
            }
        }

    } else if (e.currentTarget.parentNode.parentNode.parentNode.querySelector('.inc_add_to_basket_btn')) {
        if (e.currentTarget.parentNode.parentNode.classList.contains('ic_product')) {
            var val = e.currentTarget.parentNode.parentNode.querySelector('.inc_add_to_basket_btn').getAttribute('onclick');
            var bundle_id_modal = val.split(',')[1];
        } else {
            var val = e.currentTarget.parentNode.parentNode.parentNode.querySelector('.inc_add_to_basket_btn').getAttribute('onclick');
            var bundle_id_modal = val.split(',')[1];
            var p2 = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('data_selected_prod_id')
            if (document.querySelector('#ic_bundle_pdp .ic_product') != null) {
                var p1 = document.querySelector('#ic_bundle_pdp .ic_product').getAttribute('data_selected_prod_id')
            } else {
                var bun_res = JSON.parse(localStorage.getItem('inc_data'))
                if (bun_res != null) {
                    for (k = 0; k < bun_res.Bundles.length; k++) {
                        if (bun_res.Bundles[k].BundleId == bundle_id_modal) {
                            if(bun_res.Bundles[k].Products != null){
                                if (bun_res.Bundles[k].Products[0].ProductId != p2) {
                                    p1 = bun_res.Bundles[k].Products[0].ProductId;
                                } else {
                                    p1 = bun_res.Bundles[k].Products[1].ProductId;
                                }
                            }else{
                                if (bun_res.Bundles[k].ProductIds[0] != p2) {
                                    p1 = bun_res.Bundles[k].ProductIds[0];
                                } else {
                                    p1 = bun_res.Bundles[k].ProductIds[1];
                                }
                            }
                        }
                    }
                    if (p1 == null || p1 == undefined) {
                        var p1 = localStorage.getItem('added_prd')
                    }
                } else {
                    var p1 = localStorage.getItem('added_prd')
                }
            }
        }
    } else if (document.querySelector('.ws-main-body-section .add-to-basket-btn')) {
        var val = e.currentTarget.parentNode.querySelector('.add-to-basket-btn').getAttribute('onclick')
        var bundle_id_modal = val.split(',')[1];
        var p2 = e.currentTarget.parentNode.querySelector('.add-to-basket-btn').getAttribute('id').replace("add_", "")
    } else if (e.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector('.model_wrapper .inc-add-to-basket')) {
        var bundle_id_modal = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('data-selected-bundle-id');
        var p2 = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('data-main-prod-id')
        var p1 = document.querySelector('.ic_bundle_wrap_div .ic-product').getAttribute('data-main-prod-id')
    } else if (e.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector('.cart-bundles .inc-add-to-basket')) {
        var bundle_id_modal = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('data-selected-bundle-id');
        var p2 = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('data-main-prod-id');
        var bun_res = JSON.parse(localStorage.getItem('response'))
        if (bun_res != null) {
            for (k = 0; k < bun_res.Bundles.length; k++) {
                if (bun_res.Bundles[k].BundleId == bundle_id_modal) {
                    if(bun_res.Bundles[k].Products != null){
                        if (bun_res.Bundles[k].Products[0].ProductId != p2) {
                            p1 = bun_res.Bundles[k].Products[0].ProductId;
                        } else {
                            p1 = bun_res.Bundles[k].Products[1].ProductId;
                        }
                    }else{
                        if (bun_res.Bundles[k].ProductIds[0] != p2) {
                            p1 = bun_res.Bundles[k].ProductIds[0];
                        } else {
                            p1 = bun_res.Bundles[k].ProductIds[1];
                        }
                    }
                }
            }
            if (p1 == null || p1 == undefined) {
                var p1 = localStorage.getItem('added_prd')
            }
        } else {
            var p1 = localStorage.getItem('added_prd')
        }
    } else if (document.querySelector('#inc-templatemodal .prodTabli .look-buy_product_details') != null) {
        var bundle_id_modal = e.currentTarget.parentNode.parentNode.parentNode.querySelector('.inc_submit').getAttribute('data-bundleid').split('_')[0]
        if (document.querySelector('.tpProductItem span') != null) {
            var p1 = document.querySelector('.tpProductItem span').innerText;
        } else {
            var p1 = localStorage.getItem('added_prd')
        }
        var p2 = e.currentTarget.parentNode.parentNode.parentNode.querySelector('.inc_submit').getAttribute('data-id');
    } else if (document.querySelector('#inc-templatemodal .myCartFormmodal') != null) {
        var json_datas = e.currentTarget.parentNode.querySelector('input[name="jsonData"]').value;
        var bundle = JSON.parse(json_datas);
        var bundle_id_modal = bundle[0].bundle_id;
        var p2 = bundle[0].params[0].product_id;
        var p1 = null;
        for (k = 0; k < bun_res.Bundles.length; k++) {
            if (bun_res.Bundles[k].BundleId == bundle_id_modal) {
                if(bun_res.Bundles[k].Products != undefined){
                    p1 = bun_res.Bundles[k].Products[0].ProductId
                }else{
                    p1 = bun_res.Bundles[k].ProductIds[0]
                }
            }
        }
        //var bundle_id_modal = e.currentTarget.parentNode.querySelector('input[name="jsonData"]').id.replace('mydata','');
    } else if (document.querySelector('#inc-templatemodal .detail_wrap') != null) {
        var bundle_id_modal = e.currentTarget.parentNode.querySelector('.add-to-basket-btn').getAttribute('data-bundle-id');
    } else if (document.querySelector('#inc-templatemodal .prod_details_div') != null) {
        var bundle_id_modal = e.currentTarget.parentNode.parentNode.querySelector('.addtocartbtn').getAttribute('onclick').split(',')[1].replace(')', '')
        var p2 = e.currentTarget.parentNode.parentNode.querySelector('.addtocartbtn').getAttribute('prodid')
        var p1 = document.querySelector('input[name="product"]').value
    } else if (document.querySelector('#increasingly-page-cart1 .product-bundle') != null) {
        var json_datas = e.currentTarget.parentNode.querySelector('input[name="jsonData"]').value;
        var bundle = JSON.parse(json_datas);
        var bundle_id_modal = bundle[0].bundle_id;
        var p1 = bundle[0].params[0].product_id
        var p2 = bundle[0].params[1].product_id
        //var bundle_id_modal = e.currentTarget.parentNode.querySelector('input[name="jsonData"]').id.replace('mydata','');
    } else if (document.querySelector('#increasingly-page-cart1 .pro_name') != null) {
        var bundle_id_modal = e.currentTarget.parentNode.parentNode.parentNode.querySelector('.get-this-deal button').getAttribute('bundleid')
        var json_datas = e.currentTarget.parentNode.parentNode.parentNode.querySelector('input[name=jsonData]').value
        var bundle_s = JSON.parse(json_datas);
        var p1 = bundle_s[0].params[0].product_id
        var p2 = bundle_s[0].params[1].product_id
    } else if (document.querySelector('#inc-carttemplate .prod-holder') != null) {
        var bundle_id_modal = e.currentTarget.parentNode.id.split('_')[0];
    } else if (window.location.host == "www.inov-8.com") {
        var bundle_id_modal = e.currentTarget.parentNode.parentNode.querySelector('.addtocartbtn').getAttribute('onclick').split(',')[1];
        var p2 = e.currentTarget.parentNode.parentNode.querySelector('.addtocartbtn').getAttribute('prodid');
    } else if (document.querySelector('.ptab-content .tabs_pannel_content button') != null) {
        var bundle_id_modal = e.currentTarget.parentNode.querySelector('button').getAttribute('onclick').split(',')[1];
        var p2 = e.currentTarget.parentNode.querySelector('button').getAttribute('prodid');
        var p1 = localStorage.getItem('prodId');
    } else if (document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_sidebar_modal_block') != null || document.querySelector('.inc_af_block') != null || document.querySelector('.inc_am_block') != null) {
        
        var productblock = e.currentTarget.parentNode.parentNode
        if(e.currentTarget.parentNode.parentNode.classList.contains('inc_product_view_img_desc_block') == true){
            productblock = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode
        }
        var bundle_id_modal = e.currentTarget.parentNode.parentNode.getAttribute('data-bundleid');
        if (bundle_id_modal == null) {
            var bundle_id_modal = e.currentTarget.parentNode.getAttribute('data-bundle_id');

        }
        if(e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true && bundle_id_modal == null){
            var bundle_id_modal = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data-bundle_id');
        }
        if (bundle_id_modal == null) {
            bundle_id_modal = e.currentTarget.parentNode.parentNode.getAttribute('data-bundle_id');
        }
        if(bundle_id_modal == null){
            if(e.currentTarget.parentNode.parentNode.classList.contains('inc_product_view_img_desc_block') == true){
                bundle_id_modal = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data-bundle_id');
            }
        }
        var p1 = null
        if (document.querySelector('.inc_pdp_product-main_block .inc_product_block') != null) {
            p1 = document.querySelector('.inc_pdp_product-main_block .inc_product_block').getAttribute('data-id')
        }
        if (p1 == null) {
            var bun_res = JSON.parse(sessionStorage.getItem('bundleJSON'))
            if (bun_res != null) {
                for (k = 0; k < bun_res.Bundles.length; k++) {
                    if (bun_res.Bundles[k].BundleId == bundle_id_modal) {
                        if(bun_res.Bundles[k].Products != null){
                            if (bun_res.Bundles[k].Products[0].ProductId != p2) {
                                p1 = bun_res.Bundles[k].Products[0].ProductId;
                            } else {
                                p1 = bun_res.Bundles[k].Products[1].ProductId;
                            }
                        }else{
                            if (bun_res.Bundles[k].ProductIds[0] != p2) {
                                p1 = bun_res.Bundles[k].ProductIds[0];
                            } else {
                                p1 = bun_res.Bundles[k].ProductIds[1];
                            }
                        }
                    }
                }
                if (p1 == null || p1 == undefined) {
                    var p1 = localStorage.getItem('added_prd')
                }
            } else {
                var p1 = localStorage.getItem('added_prd')
            }
        }
        var p2 = e.currentTarget.parentNode.parentNode.getAttribute('data-id')
        if(p2 == null){
            if(e.currentTarget.parentNode.parentNode.classList.contains('inc_product_view_img_desc_block') == true){
                p2 = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data-id');
            }
        }
        
        if(e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true && p2 == null){
            p2 = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data-id');
        }
    } else if (window.location.host == "store.hp.com") {
        var bundle_id_modal = e.currentTarget.parentNode.parentNode.getAttribute('data-bundleid');
        var p1 = null
        if (document.querySelector('.inc_pdp_product-main_block .inc_product_block') != null) {
            p1 = document.querySelector('.inc_pdp_product-main_block .inc_product_block').getAttribute('data-id')
        }
        if (p1 == null) {
            var bun_res = JSON.parse(sessionStorage.getItem('bundleJSON'))
            if (bun_res != null) {
                for (k = 0; k < bun_res.Bundles.length; k++) {
                    if (bun_res.Bundles[k].BundleId == bundle_id_modal) {
                        if(bun_res.Bundles[k].Products != null){
                            if (bun_res.Bundles[k].Products[0].ProductId != p2) {
                                p1 = bun_res.Bundles[k].Products[0].ProductId;
                            } else {
                                p1 = bun_res.Bundles[k].Products[1].ProductId;
                            }
                        }else{
                            if (bun_res.Bundles[k].ProductIds[0] != p2) {
                                p1 = bun_res.Bundles[k].ProductIds[0];
                            } else {
                                p1 = bun_res.Bundles[k].ProductIds[1];
                            }
                        }
                    }
                }
                if (p1 == null || p1 == undefined) {
                    var p1 = localStorage.getItem('added_prd')
                }
            } else {
                var p1 = localStorage.getItem('added_prd')
            }
        }
        var p2 = e.currentTarget.parentNode.parentNode.getAttribute('data-id')
    }

    $('#exampleModalCenter').addClass('show');
    $('#exampleModalCenter').css('display', 'block');
    getBundleDetails(bundle_id_modal, p1, p2);
})

//inc-carttemplate
var flag_response = true;

$('.bundle-disable').on('click', function(e) {
    var p1 = null;
    var p2 = null;
    if (document.querySelector('.ic_product_wrapper .ic_product_bundling.active')) {
        if (window.location.host == "www.denbypottery.com" || window.location.host == "www.denbyusa.com") {
            var bundle_id = e.currentTarget.parentNode.parentNode.getAttribute('data_bundleid')
            if(bundle_id == null){
                bundle_id = e.currentTarget.parentNode.parentNode.getAttribute('bundle_id')
            }
            var p2 = e.currentTarget.parentNode.parentNode.getAttribute('data_selected_prod_id')
            var p1 = document.querySelector('#ic_bundle_pdp .ic_product').getAttribute('data_selected_prod_id')
        } else {
            if (document.querySelector('.inc_new_temp') != null) {

                var bundle_id = e.currentTarget.parentNode.parentNode.getAttribute('bundle_id');
                if (bundle_id == null) {
                    bundle_id = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('bundle_id');
                }
                var p2 = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('data_selected_prod_id')
                if (p2 == null || p2 == undefined) {
                    var p2 = e.currentTarget.parentNode.parentNode.getAttribute('data_selected_prod_id')
                }
                
                if(document.querySelector('.inc_new_temp #ic_single_wrap .ic_product') != null){
                    var p1 = document.querySelector('.inc_new_temp #ic_single_wrap .ic_product').getAttribute('data_selected_prod_id')
                }else{
                    var main_p = JSON.parse(localStorage.getItem('inc_product_ids'));
                    var p1 =main_p[0]
                }
            } else {
                if (e.currentTarget.parentNode.querySelector('span') != null) {
                    var index = e.currentTarget.parentNode.querySelector('span').getAttribute('index_value');
                } else {
                    var index = e.currentTarget.parentNode.querySelector('a').getAttribute('index_value');
                }
                var bundlediv = document.querySelectorAll('.ic_product_wrapper .ic_product_bundling')[index]
                //var val = e.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_add_to_basket_btn').getAttribute('onclick');
                var bundle_id = bundlediv.getAttribute('bundle_id');
                var p1 = bundlediv.querySelectorAll('.ic_product')[0].getAttribute('data_selected_prod_id');
                var p2 = bundlediv.querySelectorAll('.ic_product')[1].getAttribute('data_selected_prod_id');

            }
        }
    } else if (document.querySelector('#ic-bundle-wrapper .ic_product_bundling')) {
        var index = e.currentTarget.parentNode.querySelector('a').getAttribute('index_value');
        var bundlediv = document.querySelectorAll('#ic-bundle-wrapper .ic_product_bundling')[index]
        var bundle_id = bundlediv.querySelector('.ic-product').getAttribute('data-selected-bundle-id');
        var p1 = bundlediv.querySelectorAll('.ic-product')[0].getAttribute('data-main-prod-id')
        var p2 = bundlediv.querySelectorAll('.ic-product')[1].getAttribute('data-main-prod-id');
    } else if (document.querySelector('.product-shop .ic_product_bundling')) {
        var bundle_id = document.querySelector('.product-shop .ic_product_bundling.active .ic-product').getAttribute('data-selected-bundle-id');
    } else if (document.querySelector('#increasingly-catalog-product3 .inc_tab_links') != null) {
        var tab_ind = e.currentTarget.parentNode.id.replace('tablbl', '');
        var bundle_id = document.querySelector('#content' + tab_ind + ' .increasingly_thumbnail').getAttribute('bundleid');
        var par_elm = document.querySelector('#content' + tab_ind + ' .increasingly_thumbnail').parentNode
        var p1 = par_elm.querySelectorAll('.increasingly_thumbnail')[0].getAttribute('productid')
        var p2 = par_elm.querySelectorAll('.increasingly_thumbnail')[1].getAttribute('productid')
    } else if (document.querySelector('#increasingly-catalog-product3 .bundle_tablinks') != null) {
        //var tab_ind = e.currentTarget.parentNode.id.replace('tablbl','');
        var bundle_id = document.querySelector('.product-bundle.active form').getAttribute('bundleid');
        var p1 = document.querySelectorAll('.product-bundle.active form .increasingly_thumbnail')[0].getAttribute('productid')
        var p2 = document.querySelectorAll('.product-bundle.active form .increasingly_thumbnail')[1].getAttribute('productid')
    } else if (document.querySelector('#inc-template') != null) {
        var bundle_id = e.currentTarget.parentNode.id.replace('bundless_', '');
    } else if (document.querySelector('.inc_innov8') != null) {
        var bundle_id = e.currentTarget.parentNode.getAttribute('onclick').split(',')[0].replace('tabLink(', '')
        var ind = e.currentTarget.parentNode.getAttribute('data-id').replace('look-', '').trim()
        var bund_elm = document.querySelector('#look-' + ind + '')
        var p1 = bund_elm.querySelectorAll('li')[0].id.split('_')[1]
        var p2 = bund_elm.querySelectorAll('li')[1].id.split('_')[1]
    } else if (document.querySelector('.categorypath-whisky-flavour-profiles-young-spritely .tab-content.current button') != null) {
        var data = document.querySelector('.tab-content.current button').getAttribute('onclick').split(',');
        var bundle_id = data[0].split('(')[1];
    } else if (window.location.host == "www.smws.com") {
        var bundle_id = e.currentTarget.parentNode.getAttribute('onclick').split(',')[0].replace("tabLink(", "")
        var ind = e.currentTarget.parentNode.getAttribute('data-id').replace('look-', '').trim()
        var bund_elm = document.querySelector('#look-' + ind + '')
        var p1 = bund_elm.querySelectorAll('li')[0].getAttribute('prodids')
        var p2 = bund_elm.querySelectorAll('li')[1].getAttribute('prodids')

    } else if (document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_sidebar_modal_block') != null || document.querySelector('.inc_af_block') != null || document.querySelector('.inc_am_block') != null) {
        var bundle_id = e.currentTarget.parentNode.getAttribute('data-bundleid');
        if (bundle_id == null) {
            var bundle_id = e.currentTarget.parentNode.getAttribute('data-bundle_id');

        }
        if (bundle_id == null) {
            var bundle_id = e.currentTarget.parentNode.parentNode.parentNode.parentNode.getAttribute('data-bundle_id');

        }
        if(bundle_id == null){
            if(e.currentTarget.parentNode.parentNode.classList.contains('inc_product_view_img_desc_block') == true){
                bundle_id = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data-bundle_id');
            }
        }
        var p1 = ""
        if (document.querySelector('.inc_pdp_product-main_block .inc_product_block') != null) {
            p1 = document.querySelector('.inc_pdp_product-main_block .inc_product_block').getAttribute('data-id')
        }
        var p2 = e.currentTarget.parentNode.getAttribute('data-id')
        var p2 = e.currentTarget.parentNode.parentNode.getAttribute('data-id')
        if(p2 == null){
            if(e.currentTarget.parentNode.parentNode.classList.contains('inc_product_view_img_desc_block') == true){
                p2 = e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('data-id');
            }
        }
        if(p2 == null){
            p2 = e.currentTarget.parentNode.parentNode.parentNode.parentNode.getAttribute('data-id')
        }
        if(p2 == null){
            p2 = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('data-id')
        }
        if(p2 == null && e.currentTarget.parentNode.classList.contains('inc_product_block') == true){
            p2 = e.currentTarget.parentNode.getAttribute('data-id')
        }
    } else if (window.location.host == "store.hp.com") {
        var bundle_id = e.currentTarget.parentNode.getAttribute('data-bundle_id');
        var p1 = ""
        if (document.querySelector('.inc_pdp_product-main_block .inc_product_block') != null) {
            p1 = document.querySelector('.inc_pdp_product-main_block .inc_product_block').getAttribute('data-id')
        }
        var p2 = e.currentTarget.parentNode.getAttribute('data-id')
    }

    $('#exampleModalCenter').addClass('show');
    $('#exampleModalCenter').css('display', 'block');
    getBundleDetails(bundle_id, p1, p2);
});

function getBundleDetails(bundle_ids, p1, p2) {
    var data = {
        "bundleId": bundle_ids.trim() + "|" + p1 + "|" + p2,
        "bundleOperation": $.trim(localStorage.getItem('bundle_check')),
        "apiKey": userapikey,
        "userId": userLg
    }
    if (flag_response && logoutupdt != 'logout') {
        flag_response = false;
        if(clientregion == 'JP' || clientregion == 'JPN' || clientregion == 'AU' || clientregion == 'AUS'){
            var urls = 'https://jpapi.increasingly.co/RemoveDynamicBundles'
        }else{
            var urls = 	"https://api.increasingly.co/RemoveDynamicBundles";
        }
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', urls, true);
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function () { }
        xhr.onerror = function () {
            console.log('error');
        };
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                if(xhr.responseText != ""){
                    var html_pop = '<div class="ext_popup" id="ext_ic_bundle_popup" style="text-align:left;display: flex;display: -webkit-box;display: -ms-flexbox;display: flex;-moz-justify-content: center;-ms-justify-content: center;-webkit-box-pack: center;justify-content: center;-ms-flex-pack: center;-moz-align-items: flex-start;-ms-align-items: flex-start;-webkit-box-align: flex-start;-ms-flex-align: flex-start;align-items: flex-start;height: 100%;margin-top: 0;margin-right: 0;margin-bottom: 0;margin-left: 0;position: fixed;top: 0;right: 0;bottom: 0;left: 0;-webkit-transition: all 0.3s;transition: all 0.3s;background: rgba(0,0,0,0.57);z-index: 9999999999;overflow-y: auto;overflow-x: hidden;"><div class="modal_wrapper" style="max-width:550px;position: relative;top: 35%;margin-bottom: 50px;width: 95%;padding-bottom: 15px;background-color: #fff;font-size: 15px;"><img src="https://www.increasingly.co/Implementation/close_icons.png" style="margin-left:6px;margin-top:5px;margin-right: 3px; float: right;cursor:pointer;"/><img src="https://www.increasingly.co/Increasingly_chrome/assets/images/logo.png" style="margin-left:25%;padding:15px;width:40%;"><span class=""></span><div style="color: #777; padding: 20px; font-family: sans-serif; font-size: 15px; font-weight: 600;"><p style="margin: 0 auto 5px auto;color:#48B28D;font-size: 15px;line-height: normal;font-weight: 600;"> This bundle has been removed from your website.</p><p style="margin: 0 auto 5px auto;font-size: 15px;line-height: normal;font-weight: 600;color: #6a6a7d;">It may take upto 20 minutes for this change to take effect on your site.</p><span style="font-size: 15px;line-height: normal;font-weight: 500;color:#6a6a7d;font-weight:600;">If this change does not take effect, please contact support.</span> <div class="main_image_wrapper" style="border: 1px solid #ffbc00de; margin: 20px 0px;padding: 5px 0;"><div class="img_wraps" style="width: 30px;display: inline-block;padding: 5px 0;    margin: 0 6px 0 0px;"><img class="img_src_cls" src="https://www.increasingly.co/Implementation/bulb.png" style="margin-top:-25px;"></div><div style="display:inline-block;"><p style="margin: 0 auto 5px auto;font-size: 15px;line-height: normal;font-weight: 600;color: #6a6a7d;" class="want_to_mk">Want us to make changes to the algorithm? Please contact us</p><a href="mailto:hello@increasingly.com" target="_self" class="here_link" style="color: #f9494f;text-decoration:underline;cursor:pointer;" id="contact_support">here.</a></div></div></div><div style="font-family: sans-serif; font-size: 20px; padding-top: 10px; margin-top: 15px; color: #48B28D; border-top: 1px solid #48B28D; padding-bottom: 0; margin: 0 10px; font-weight: bold;cursor:pointer;"><a href="mailto:hello@increasingly.com" target="_self" id="contact_link" style="color:#e84949;font-size:15px;text-decoration:underline;">Contact Support</a></div></div></div>';
                    jQuery('body').append(html_pop)
                    $('.ext_popup').css({ "display": "flex" });
                    var pop = document.getElementById('ext_ic_bundle_popup');
                    if (pop != null) {
                        pop.addEventListener("click", function() {
                            $('#ext_ic_bundle_popup').remove();
                        }, false);
                    }
                }
            }
        }
        xhr.withCredentials = true;
        xhr.send(JSON.stringify(data));
    }

    setTimeout(function() {
        flag_response = true;
    }, 300)
}
