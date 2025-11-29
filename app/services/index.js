const mergeServices = () => {
  const services = {};

  try {
    const serviceModules = import.meta.glob(
      ["@@/layers/*/app/services/*", "@@/app/services/*"],
      {
        eager: true,
      },
    );

    for (const path in serviceModules) {
      const name = path.slice(path.lastIndexOf("/") + 1, path.lastIndexOf("."));

      if (name == "index") continue;

      const module = serviceModules[path];
      Object.assign(services, { [name]: module.default || { ...module } });
    }

    return services;
  } catch (error) {
    console.error("Error merging services:", error);

    return services;
  }
};

export const services = Object.freeze(mergeServices());
