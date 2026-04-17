import BackBtn from "@/shared/components/BackBtn";

function ComingSoon() {
  return (
    <div className="layout-container max-width-page flex-center flex-col gap-12 md:flex-row">
      <div className="relative group">
        <div className="relative w-full aspect-square max-w-50 md:max-w-100 md:p-8 p-4 flex-center bg-gray-100">
          <img
            alt="Minimalist thin-line quill graphic"
            className="sizefull object-contain grayscale opacity-80 mix-blend-multiply"
            data-alt="A minimalist fine-line artistic drawing of a wooden quill pen resting on a thick sheet of handmade cream paper, soft studio lighting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfkJt1u3kMg3tL-OUJcwRAletj8hPnQpknQFU1KzA0hSpcJNMqk2BS6zDL7z2r8uqyil1r0si06AjFtfewjScWtqQ7-AyzXT1DrVbRIR0RA81CtzPcJ1zHQC6B0yonPVC_I73i7Drd3ThYdkPZfyWMTqATts46n2gMCrK11MwDb07RO6Mep3vfw3XxwoWMxjQj8SipydOIq7tZ23CYYipgGEuQ58Vo0nynvDU-i-5qZSTGgI8zIcwlaK773ChvtNQLSI4MT4vqYKUg"
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
