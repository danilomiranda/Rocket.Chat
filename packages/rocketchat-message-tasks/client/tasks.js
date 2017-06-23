Meteor.methods({
	checkTask(message) {
		if (!Meteor.userId()) {
			return false;
		}
		if (RocketChat.models.Subscriptions.findOne({ rid: todo.rid }) == null) {
			return false;
		}
		if (!RocketChat.settings.get('Message_AllowTasks')) {
			return false;
		}
		return Tasks.update({
			_id: message._id
		}, {
			$set: {
				starred: !!message.starred
			}
		});
	}
});
