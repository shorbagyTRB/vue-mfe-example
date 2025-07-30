const routeManifest = [
  {
    remote: {
      module: "remote",
      entry: "http://localhost:3001/assets/remoteEntry.js",
    },
    route: {
      name: "remote",
      path: "/remote",
      meta: {
        title: "Remote",
      },
    },
  },
  {
    remote: {
      module: "remoteReact",
      entry: "http://localhost:3002/assets/remoteEntry.js",
    },
    route: {
      name: "remoteReact",
      path: "/remote-react",
      meta: {
        title: "Remote React",
      },
    },
  },
  {
    remote: {
      module: "remoteSvelte",
      entry: "http://localhost:3003/assets/remoteEntry.js",
    },
    route: {
      name: "remoteSvelte",
      path: "/remote-svelte",
      meta: {
        title: "Remote Svelte",
      },
    },
  },
];

/**
 * This function returns the remotes from the route manifest.
 */
export const getRemotes = () => {
  return routeManifest.map((mfe) => mfe.remote);
};

export default routeManifest;
