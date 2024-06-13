import Icon from "@/components/ui/Icon";

const PostContact = () => {
  return (
    <div className="flex-between py-2">
      <div className="flex gap-4 items-center">
        <Icon name="Heart" />
        <Icon name="MessageCircle" />
      </div>
      <div>
        <Icon name="Bookmark" />
      </div>
    </div>
  );
};

export default PostContact;
