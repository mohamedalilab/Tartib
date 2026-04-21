import BackBtn from "@/shared/components/BackBtn";
import ComingSoonImg from "@assets/images/coming-soon.png";

function ComingSoon() {
  return (
    <div className="layout-container max-width-page flex-center flex-col gap-12 md:flex-row">
      <div className="relative group">
        <div className="relative w-full aspect-square max-w-50 md:max-w-100 md:p-8 p-4 flex-center bg-gray-100">
          <img
            className="sizefull object-contain grayscale opacity-80 mix-blend-multiply"
            src={ComingSoonImg}
            alt="Minimalist thin-line quill graphic"
            data-alt="A minimalist fine-line artistic drawing of a wooden quill pen resting on a thick sheet of handmade cream paper, soft studio lighting"
          />
        </div>
      </div>
      <div className="space-y-8">
        <div className="space-y-6 text-on-surface">
          <h1 className="text-display-md font-normal">The Next Chapter.</h1>
          <p className="text-body-lg text-on-surface-variant max-w-md font-light">
            We are currently indexing new features for the Scholar's Workspace.
            This fragment of the ecosystem will be available soon.
          </p>
        </div>
        <BackBtn label="take me back" />
      </div>
    </div>
  );
}

export default ComingSoon;
