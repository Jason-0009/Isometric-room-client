import { Graphics } from 'pixi.js'

import WallDirection from '@modules/wall/WallDirection'

import Point3D from '@utils/Point3D'

import { WALL_COLORS, WALL_DIMENSIONS } from '@constants/Wall.constants'

import { TILE_DIMENSIONS } from '@constants/Tile.constants'

/**
 * Represents a graphical representation of a wall.
 */
export default class Wall extends Graphics {
    /**
     * Create a new Wall instance.
     * 
     * @param {Point3D} position - The position of the wall.
     * @param {WallDirection} direction - The direction of the wall.
     */
    constructor(position: Point3D, direction: WallDirection) {
        super()

        this.position.copyFrom(position)

        this.#draw(direction)
    }

    /**
     * Draw the wall graphics.
     * 
     * @param {WallDirection} direction - The direction of the wall.
     */
    #draw(direction: WallDirection): void {
        switch (direction) {
            case WallDirection.BOTH:
                this.#drawLeft()
                this.#drawRight()

                break

            case WallDirection.LEFT:
                this.#drawLeft()

                break

            case WallDirection.RIGHT:
                this.#drawRight()

                break
        }
    }

    /**
     * Draw the left side of the wall.
     */
    #drawLeft(): void {
        this.#drawLeftSurface()
        this.#drawLeftBorder()
        this.#drawTopLeftBorder()
    }

    /**
     * Draw the right side of the wall.
     */
    #drawRight(): void {
        this.#drawRightSurface()
        this.#drawRightBorder()
        this.#drawTopRightBorder()
    }

    /**
     * Draw the left surface of the wall.
     */
    #drawLeftSurface(): void {
        this.beginFill(WALL_COLORS.LEFT.SURFACE)

        const points = [
            0, TILE_DIMENSIONS.HEIGHT / 2 + TILE_DIMENSIONS.THICKNESS,
            0, -WALL_DIMENSIONS.HEIGHT,
            TILE_DIMENSIONS.WIDTH / 2, -WALL_DIMENSIONS.HEIGHT - TILE_DIMENSIONS.HEIGHT / 2,
            TILE_DIMENSIONS.WIDTH / 2, TILE_DIMENSIONS.THICKNESS,
        ]

        this.drawPolygon(points)
        this.endFill()
    }

    /**
     * Draw the left border of the wall.
     */
    #drawLeftBorder(): void {
        this.beginFill(WALL_COLORS.LEFT.BORDER)

        const points = [
            0, TILE_DIMENSIONS.HEIGHT / 2 + TILE_DIMENSIONS.THICKNESS,

            -WALL_DIMENSIONS.THICKNESS, TILE_DIMENSIONS.HEIGHT / 2 +
            TILE_DIMENSIONS.THICKNESS - WALL_DIMENSIONS.THICKNESS / 2,

            -WALL_DIMENSIONS.THICKNESS, -WALL_DIMENSIONS.HEIGHT - WALL_DIMENSIONS.THICKNESS / 2,

            0, -WALL_DIMENSIONS.HEIGHT,
        ]

        this.drawPolygon(points)
        this.endFill()
    }

    /**
     * Draw the top-left border of the wall.
     */
    #drawTopLeftBorder(): void {
        this.beginFill(WALL_COLORS.LEFT.BORDER_TOP)

        const points = [
            -WALL_DIMENSIONS.THICKNESS, -WALL_DIMENSIONS.HEIGHT -
            WALL_DIMENSIONS.THICKNESS / 2,

            TILE_DIMENSIONS.WIDTH / 2, -WALL_DIMENSIONS.HEIGHT -
            TILE_DIMENSIONS.HEIGHT / 2 - WALL_DIMENSIONS.THICKNESS,

            TILE_DIMENSIONS.WIDTH / 2, -WALL_DIMENSIONS.HEIGHT - TILE_DIMENSIONS.HEIGHT / 2,

            0, -WALL_DIMENSIONS.HEIGHT,
        ]

        this.drawPolygon(points)
        this.endFill()
    }

    /**
     * Draw the right surface of the wall.
     */
    #drawRightSurface(): void {
        this.beginFill(WALL_COLORS.RIGHT.SURFACE)

        const points = [
            TILE_DIMENSIONS.WIDTH / 2, TILE_DIMENSIONS.THICKNESS,
            TILE_DIMENSIONS.WIDTH / 2, -WALL_DIMENSIONS.HEIGHT - TILE_DIMENSIONS.HEIGHT / 2,
            TILE_DIMENSIONS.WIDTH, -WALL_DIMENSIONS.HEIGHT,
            TILE_DIMENSIONS.WIDTH, TILE_DIMENSIONS.HEIGHT / 2 + TILE_DIMENSIONS.THICKNESS,
        ]

        this.drawPolygon(points)
        this.endFill()
    }

    /**
     * Draw the right border of the wall.
     */
    #drawRightBorder(): void {
        this.beginFill(WALL_COLORS.RIGHT.BORDER)

        const points = [
            TILE_DIMENSIONS.WIDTH, TILE_DIMENSIONS.HEIGHT / 2 +
            TILE_DIMENSIONS.THICKNESS,

            TILE_DIMENSIONS.WIDTH + WALL_DIMENSIONS.THICKNESS,
            TILE_DIMENSIONS.HEIGHT / 2 + TILE_DIMENSIONS.THICKNESS -
            WALL_DIMENSIONS.THICKNESS / 2,

            TILE_DIMENSIONS.WIDTH + WALL_DIMENSIONS.THICKNESS,
            -WALL_DIMENSIONS.HEIGHT - WALL_DIMENSIONS.THICKNESS / 2,

            TILE_DIMENSIONS.WIDTH, -WALL_DIMENSIONS.HEIGHT,
        ]

        this.drawPolygon(points)
        this.endFill()
    }

    /**
     * Draw the top-right border of the wall.
     */
    #drawTopRightBorder(): void {
        this.beginFill(WALL_COLORS.RIGHT.BORDER_TOP)

        const points = [
            TILE_DIMENSIONS.WIDTH / 2, -WALL_DIMENSIONS.HEIGHT -
            TILE_DIMENSIONS.HEIGHT / 2 - WALL_DIMENSIONS.THICKNESS,

            TILE_DIMENSIONS.WIDTH + WALL_DIMENSIONS.THICKNESS,
            -WALL_DIMENSIONS.HEIGHT - WALL_DIMENSIONS.THICKNESS / 2,

            TILE_DIMENSIONS.WIDTH, -WALL_DIMENSIONS.HEIGHT,

            TILE_DIMENSIONS.WIDTH / 2, -WALL_DIMENSIONS.HEIGHT - TILE_DIMENSIONS.HEIGHT / 2,
        ]

        this.drawPolygon(points)
        this.endFill()
    }
}