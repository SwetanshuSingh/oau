export default function Grid() {
  return (
    <section className="w-full h-[800px] overflow-hidden">
      <div className="w-full h-full flex px-2 pb-2">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col border-r border-accent-metal/20">
          {/* Top Left Section */}
          <div className="w-full flex flex-1 border-b border-accent-metal/20">
            <div className="w-1/2 border-r border-accent-metal/20">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1489058535093-8f530d789c3b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
                alt=""
              />
            </div>

            <div className="w-1/2 h-full">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1507097489474-c9212a8f8597?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071"
                alt=""
              />
            </div>
          </div>

          {/* Bottom Left Section */}
          <div className="w-full flex-1">
            <img
              className="w-full h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1668333186821-21e0d8fd5b0c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072"
              alt=""
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
