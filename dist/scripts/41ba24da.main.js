function slideShow(){var a=$("#slider .is-showing"),b=a.next().length?a.next():a.parent().children(":first");a.fadeOut(800,function(){b.fadeIn(800).addClass("is-showing")}).removeClass("is-showing"),setTimeout(slideShow,5500)}$(document).ready(function(){slideShow()}),Parse.initialize("O7qNRhkqsSWMW0GW9lcVtezulyIKaIXSVRtgHckx","epJ3KBQuLaePHDzDW8bmD4BsutMJ1fMHf1uSrq0F");var Main=Parse.Object.extend({className:"Main"}),MainCollection=Parse.Collection.extend({model:Main}),collection=new MainCollection,MainView=Parse.View.extend({className:"cool",mainTemplate:_.template($(".main-template").text()),events:{"click .before":"showBeforeView","click .during":"showDuringView","click .rest":"showRestView","click .communication":"showCommunicationView","click .support":"showSupportView","click .featurelist":"showFeatureListView","click .videos":"showVideoView"},initialize:function(){$(".container1").append(this.el),this.render()},render:function(){var a=this.mainTemplate();this.$el.html(a)},showBeforeView:function(){new BeforeView},showDuringView:function(){console.log("button is working"),new DuringView},showRestView:function(){new RestView},showCommunicationView:function(){new CommunicationView},showSupportView:function(){new SupportView},showFeatureListView:function(){new FeatureListView},showVideoView:function(){new VideoView}}),main=new MainView,BeforeView=Parse.View.extend({className:"cooler",beforeTemplate:_.template($(".before-template").text()),events:{"click .during":"showDuringView","click .rest":"showRestView","click .communication":"showCommunicationView","click .support":"showSupportView","click .before":"showBeforeView","click .duringforward":"showDuringView","click .featurelist":"showFeatureListView","click .videos":"showVideoView"},initialize:function(){$(".container1").empty(),$(".container1").append(this.el),this.render()},render:function(){var a=this.beforeTemplate(this.model);this.$el.html(a)},showDuringView:function(){new DuringView},showRestView:function(){new RestView},showFeatureListView:function(){new FeatureListView},showCommunicationView:function(){new CommunicationView},showVideoView:function(){new VideoView},showSupportView:function(){new SupportView},showBeforeView:function(){new BeforeView}}),DuringView=Parse.View.extend({className:"evencooler",duringTemplate:_.template($(".during-template").text()),events:{"click .during":"showDuringView","click .rest":"showRestView","click .communication":"showCommunicationView","click .support":"showSupportView","click .before":"showBeforeView","click .therestforward":"showRestView","click .featurelist":"showFeatureListView","click .videos":"showVideoView"},initialize:function(){$(".container1").empty(),$(".container1").append(this.el),this.render()},render:function(){var a=this.duringTemplate(this.model);this.$el.html(a)},showDuringView:function(){new DuringView},showRestView:function(){new RestView},showVideoView:function(){new VideoView},showFeatureListView:function(){new FeatureListView},showCommunicationView:function(){new CommunicationView},showSupportView:function(){new SupportView},showBeforeView:function(){new BeforeView}}),RestView=Parse.View.extend({className:"coolest",restTemplate:_.template($(".rest-template").text()),events:{"click .during":"showDuringView","click .rest":"showRestView","click .communication":"showCommunicationView","click .support":"showSupportView","click .before":"showBeforeView","click .communicationforward":"showCommunicationView","click .featurelist":"showFeatureListView","click .videos":"showVideoView"},initialize:function(){$(".container1").empty(),$(".container1").append(this.el),this.render()},render:function(){var a=this.restTemplate(this.model);this.$el.html(a)},showDuringView:function(){new DuringView},showRestView:function(){new RestView},showVideoView:function(){new VideoView},showCommunicationView:function(){new CommunicationView},showFeatureListView:function(){new FeatureListView},showSupportView:function(){new SupportView},showBeforeView:function(){new BeforeView}}),CommunicationView=Parse.View.extend({className:"com",comTemplate:_.template($(".communication-template").text()),events:{"click .during":"showDuringView","click .rest":"showRestView","click .communication":"showCommunicationView","click .support":"showSupportView","click .before":"showBeforeView","click .supportforward":"showSupportView","click .featurelist":"showFeatureListView","click .videos":"showVideoView"},initialize:function(){$(".container1").empty(),$(".container1").append(this.el),this.render()},render:function(){var a=this.comTemplate(this.model);this.$el.html(a)},showDuringView:function(){new DuringView},showFeatureListView:function(){new FeatureListView},showRestView:function(){new RestView},showCommunicationView:function(){new CommunicationView},showSupportView:function(){new SupportView},showVideoView:function(){new VideoView},showBeforeView:function(){new BeforeView}}),SupportView=Parse.View.extend({className:"support",supportTemplate:_.template($(".support-template").text()),events:{"click .during":"showDuringView","click .rest":"showRestView","click .communication":"showCommunicationView","click .support":"showSupportView","click .before":"showBeforeView","click .featurelist":"showFeatureListView","click .featurelistforward":"showFeatureListView","click .videos":"showVideoView"},initialize:function(){$(".container1").empty(),$(".container1").append(this.el),this.render()},render:function(){var a=this.supportTemplate(this.model);this.$el.html(a)},showDuringView:function(){new DuringView},showRestView:function(){new RestView},showCommunicationView:function(){new CommunicationView},showVideoView:function(){new VideoView},showSupportView:function(){new SupportView},showFeatureListView:function(){new FeatureListView},showBeforeView:function(){new BeforeView}}),FeatureListView=Parse.View.extend({className:"feature",featurelistTemplate:_.template($(".featurelist-template").text()),events:{"click .during":"showDuringView","click .rest":"showRestView","click .communication":"showCommunicationView","click .support":"showSupportView","click .featurelist":"showFeatureListView","click .before":"showBeforeView","click .videos":"showVideoView","click .videosforward":"showVideoView"},initialize:function(){$(".container1").empty(),$(".container1").append(this.el),this.render()},render:function(){var a=this.featurelistTemplate(this.model);this.$el.html(a)},showDuringView:function(){new DuringView},showRestView:function(){new RestView},showVideoView:function(){new VideoView},showCommunicationView:function(){new CommunicationView},showSupportView:function(){new SupportView},showFeatureListView:function(){new FeatureListView},showBeforeView:function(){new BeforeView}}),VideoView=Parse.View.extend({className:"video",videoTemplate:_.template($(".video-template").text()),events:{"click .during":"showDuringView","click .rest":"showRestView","click .communication":"showCommunicationView","click .support":"showSupportView","click .featurelist":"showFeatureListView","click .before":"showBeforeView","click .videos":"showVideoView","click .videosforward":"showVideoView"},initialize:function(){$(".container1").empty(),$(".container1").append(this.el),this.render()},render:function(){var a=this.videoTemplate(this.model);this.$el.html(a)},showDuringView:function(){new DuringView},showRestView:function(){new RestView},showVideoView:function(){new VideoView},showCommunicationView:function(){new CommunicationView},showSupportView:function(){new SupportView},showFeatureListView:function(){new FeatureListView},showBeforeView:function(){new BeforeView}});