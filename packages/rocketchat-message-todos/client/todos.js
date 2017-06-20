Meteor.methods({
	checkTodo(message) {
		if (!Meteor.userId()) {
			return false;
		}
		if (RocketChat.models.Subscriptions.findOne({ rid: todo.rid }) == null) {
			return false;
		}
		if (!RocketChat.settings.get('Todo_AllowStarring')) {
			return false;
		}
		return Todo.update({
			_id: message._id
		}, {
			$set: {
				starred: !!message.starred
			}
		});
	}
});
