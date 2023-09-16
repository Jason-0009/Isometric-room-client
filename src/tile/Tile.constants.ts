// Constants for tile dimensions
export const TILE_DIMENSIONS = {
    WIDTH: 64,
    HEIGHT: 32,
    THICKNESS: 8,
}

// Constants for tile colors
export const TILE_COLORS = {
    SURFACE: 0xFF0000,
    MARGIN: 0xFA8072,
    LEFT_BORDER: 0xDC143C,
    RIGHT_BORDER: 0xFF2400,
}

// Points defining the shape of a tile's surface (used for drawing)
export const TILE_SURFACE_POINTS = [
    TILE_DIMENSIONS.WIDTH / 2, 0,
    TILE_DIMENSIONS.WIDTH, TILE_DIMENSIONS.HEIGHT / 2,
    TILE_DIMENSIONS.WIDTH / 2, TILE_DIMENSIONS.HEIGHT,
    0, TILE_DIMENSIONS.HEIGHT / 2,
]

// Grid configuration representing whether to add a tile at each grid cell
export const TILE_GRID = [
    [2, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [1, 0, 0],
    [1, 0, 1],
    [1, 1, 1],
]