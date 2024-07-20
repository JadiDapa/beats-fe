const ColorPallete = () => {
  return (
    <section className="px-24">
      <div className="flex flex-wrap gap-6">
        <div className="size-40 border border-white bg-background">
          Background
        </div>
        <div className="size-40 border border-white bg-foreground">
          Foreground
        </div>
        <div className="size-40 border border-white bg-muted">Muted</div>
        <div className="size-40 border border-white bg-muted-foreground">
          Muted Foreground
        </div>
        <div className="size-40 border border-white bg-popover">Popover</div>
        <div className="size-40 border border-white bg-popover-foreground">
          Popover Foreground
        </div>
        <div className="size-40 border border-white bg-card">Card</div>
        <div className="size-40 border border-white bg-card-foreground">
          Card Foreground
        </div>
        <div className="size-40 border border-white bg-border">Border</div>
        <div className="size-40 border border-white bg-input">Input</div>{" "}
        <div className="size-40 border border-white bg-primary">Primary</div>
        <div className="size-40 border border-white bg-primary-foreground">
          Primary Foreground
        </div>{" "}
        <div className="size-40 border border-white bg-secondary">
          Secondary
        </div>
        <div className="size-40 border border-white bg-secondary-foreground">
          Secondary Foreground
        </div>{" "}
        <div className="size-40 border border-white bg-accent">Accent</div>
        <div className="size-40 border border-white bg-accent-foreground">
          Accent Foreground
        </div>
        <div className="size-40 border border-white bg-destructive">
          Destructive
        </div>
        <div className="size-40 border border-white bg-destructive-foreground">
          Destructive Foreground
        </div>
        <div className="size-40 border border-white bg-ring">Ring</div>
      </div>
    </section>
  );
};

export default ColorPallete;
